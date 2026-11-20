#!/usr/bin/env bash
# Deploy do GTA 6 Noticias na AWS (S3 + CloudFront).
# Requer: AWS CLI v2 configurada (aws configure / SSO). Nao guarda credenciais.
set -euo pipefail

STACK="${STACK_NAME:-gta6-noticias}"
REGION="${AWS_REGION:-us-east-1}"
NEWSLETTER="${ENABLE_NEWSLETTER:-true}"
DOMAIN="${DOMAIN_NAME:-}"          # ex.: gta6noticias.com.br (opcional)
ZONE="${HOSTED_ZONE_ID:-}"         # hosted zone do Route 53 (obrigatoria com DOMAIN)
LOCALHOST="${ALLOW_LOCALHOST:-false}" # 'true' libera localhost:5173 no CORS (so pra teste)
if [ -n "$DOMAIN" ] && [ "$REGION" != "us-east-1" ]; then
  echo "Com dominio proprio a stack precisa ficar em us-east-1 (exigencia do CloudFront para o certificado)." >&2
  exit 1
fi
if [ -n "$DOMAIN" ] && [ -z "$ZONE" ]; then
  echo "Defina HOSTED_ZONE_ID junto com DOMAIN_NAME." >&2
  exit 1
fi
cd "$(dirname "$0")/.."

echo "==> 1/4 Criando/atualizando a stack $STACK em $REGION"
aws cloudformation deploy \
  --stack-name "$STACK" --region "$REGION" \
  --template-file infra/template.yaml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides EnableNewsletter="$NEWSLETTER" DomainName="$DOMAIN" HostedZoneId="$ZONE" \
    AllowLocalhost="$LOCALHOST"

out() {
  aws cloudformation describe-stacks --stack-name "$STACK" --region "$REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text
}
BUCKET=$(out BucketName)
DIST=$(out DistributionId)
SITE=$(out SiteUrl)
NL=$(out NewsletterEndpoint || true)
[ "$NL" = "None" ] && NL=""

echo "==> 2/4 Build (VITE_NEWSLETTER_URL=${NL:-vazio})"
VITE_NEWSLETTER_URL="$NL" npm run build

echo "==> 3/4 Enviando para s3://$BUCKET"
# Nunca publica arquivo oculto (.env, .git...) nem source map.
if find dist \( -name '.*' -o -name '*.map' \) | grep -q .; then
  echo "dist/ contem arquivo oculto ou .map. Abortando o deploy." >&2
  exit 1
fi
# Assets com hash: cache longo. index.html: sem cache.
aws s3 sync dist "s3://$BUCKET" --delete --exclude "*.html" --exclude ".*" --exclude "*.map" \
  --cache-control "public,max-age=31536000,immutable"
for f in dist/*.html; do
  aws s3 cp "$f" "s3://$BUCKET/$(basename "$f")" \
    --cache-control "no-cache" --content-type "text/html; charset=utf-8"
done

echo "==> 4/4 Invalidando cache do CloudFront"
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" >/dev/null

echo "Pronto: $SITE"

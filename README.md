# GTA 6 Notícias

Site de fã pra acompanhar GTA 6 sem precisar abrir dez abas. Junta as notícias do dia, os clipes BR que mais rodaram no TikTok na semana e, quando sai patch, um resumo em português do que mudou. Toda notícia tem link pra fonte, e o que ainda é rumor aparece marcado como rumor.

Não tem ligação nenhuma com a Rockstar nem com a Take-Two. É projeto pessoal.

## Rodando na sua máquina

Precisa de Node 18 ou mais novo.

```
npm install
npm run dev
```

Abre em http://localhost:5173. O `npm run build` gera a pasta `dist/`, que é o site pronto pra subir.

## Onde mexer no dia a dia

O que muda toda semana fica em `src/data/`, longe dos componentes. Dá pra fechar uma edição nova sem encostar em JSX.

`src/data/noticias.js` tem a manchete, os quatro números do painel e as matérias. Cada matéria leva um `selo`: `Notícia` pra coisa confirmada, `Estimativa` pra número de consultoria (as vendas da Sensor Tower, por exemplo) e `Rumor` pro que a Rockstar ainda não confirmou. O campo `grupo` decide em qual bloco ela entra quando a aba abre, e `destaque: true` joga a matéria na prévia que aparece com a aba fechada.

`src/data/clipes.js` é a lista dos clipes: link do TikTok, @ de quem gravou, views e uma legenda curta. A seção ordena por views sozinha. Os vídeos tocam no player oficial do TikTok. Nada é baixado nem hospedado aqui, e o crédito vai sempre pra quem gravou.

## Como o site é montado

React 18 com Vite, sem framework de CSS. O estilo inteiro está em `src/styles.css`, e o comentário no topo do arquivo explica a paleta: azul-petróleo da noite, rosa e pêssego do pôr do sol, tudo tirado no olho dos trailers, porque a Rockstar não publica guia de cores. A Montserrat é servida pelo próprio site, sem Google Fonts.

A ordem das seções está em `src/App.jsx`. Notícias e Clipes ficam fechadas e abrem num botão, senão a página vira um muro de texto.

Cada seção "nasce" quando você rola até ela: começa como um card recuado e se abre até a largura toda (`src/revelar.js`). Quem deixa "reduzir movimento" ligado no sistema não vê animação, e se o JavaScript falhar o conteúdo aparece normal. Se for mexer na animação, mantém essas duas coisas.

## Publicando

O deploy vai pra AWS: bucket S3 privado, servido só pelo CloudFront, com HTTPS. Junto pode subir uma Lambda com DynamoDB pra guardar os e-mails da newsletter. A infraestrutura está em `infra/template.yaml`, e o `scripts/deploy.sh` faz o caminho todo: cria a stack, gera o build já apontando pra Lambda, sobe os arquivos e limpa o cache do CloudFront.

Precisa do AWS CLI v2 logado numa conta e de um terminal bash (no Windows, o Git Bash resolve).

```
npm run deploy                          # site + newsletter, em us-east-1
ENABLE_NEWSLETTER=false npm run deploy  # só o site
```

No fim ele imprime o endereço, algo como `https://xxxx.cloudfront.net`.

Pra usar domínio próprio, cria uma hosted zone no Route 53, troca o DNS no registrador pelos servidores que ela mostrar e roda passando o domínio e o ID da zona. O certificado HTTPS sai sozinho, mas o primeiro deploy fica parado até o DNS propagar. Com domínio, a stack tem que ficar em us-east-1, que é exigência do CloudFront.

```
DOMAIN_NAME=gta6noticias.com.br HOSTED_ZONE_ID=Z0123456789ABC npm run deploy
```

Pra apagar tudo: esvazia o bucket e roda `aws cloudformation delete-stack --stack-name gta6-noticias`.

## Falta antes de ir pro ar

- O e-mail de contato ainda é o de exemplo (`contato@seudominio.com.br`). Troca em `src/config.js` ou define `VITE_CONTATO_EMAIL`.
- A política de privacidade e os termos de uso (`src/legal/`) têm campos entre colchetes esperando nome ou razão social, CPF/CNPJ e cidade. Como o site guarda e-mail, isso não é opcional, a LGPD exige. Vale uma revisão de quem entende da parte jurídica.

E nunca coloca senha ou chave em variável `VITE_*`: tudo que começa com `VITE_` vai parar no JavaScript público do site.

## Marca

Grand Theft Auto, GTA e tudo relacionado pertencem à Rockstar Games e à Take-Two. O aviso no rodapé fica.

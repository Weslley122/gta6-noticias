import { CONTATO_EMAIL } from '../config.js'

export default function Privacidade() {
  return (
    <article>
      <h1>Política de privacidade</h1>
      <p className="legal__date">Última atualização: [DATA]</p>

      <h2>1. Quem somos</h2>
      <p>
        O GTA 6 Notícias é um site de fãs, sem afiliação com a Rockstar Games ou a Take-Two
        Interactive. O controlador dos dados é [NOME COMPLETO OU RAZÃO SOCIAL], [CPF/CNPJ],
        contato: {CONTATO_EMAIL}.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li><b>E-mail</b>, quando você se cadastra no resumo diário.</li>
        <li><b>Nome ou @ e link do clipe</b>, quando você envia um clipe por e-mail.</li>
        <li>
          <b>Registros técnicos de acesso</b> (endereço IP, data, hora, página e navegador), gerados
          pelo serviço de hospedagem para segurança e operação do site.
        </li>
      </ul>
      <p>
        O site não usa cookies de publicidade nem ferramentas de rastreamento de terceiros. As fontes
        são servidas pelo próprio site.
      </p>

      <h2>3. Para que usamos</h2>
      <ul>
        <li>E-mail: enviar o resumo diário. Base legal: consentimento (LGPD, art. 7º, I).</li>
        <li>Clipes enviados: publicar com crédito ao autor. Base legal: consentimento.</li>
        <li>
          Registros técnicos: segurança e prevenção de abuso. Base legal: legítimo interesse
          (art. 7º, IX) e guarda de registros exigida pelo Marco Civil da Internet (Lei 12.965/2014).
        </li>
      </ul>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Não vendemos dados. A hospedagem e o armazenamento ficam na Amazon Web Services (AWS), que
        pode processar dados fora do Brasil, com as salvaguardas previstas no art. 33 da LGPD.
        [LISTE AQUI QUALQUER OUTRO SERVIÇO, como o de envio de e-mail.]
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <ul>
        <li>E-mail: até você cancelar o cadastro.</li>
        <li>Registros técnicos: pelo prazo legal de [6 MESES] e depois apagados.</li>
        <li>Clipes: enquanto estiverem publicados ou até você pedir a remoção.</li>
      </ul>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode pedir confirmação, acesso, correção, anonimização, portabilidade, exclusão e
        informação sobre compartilhamento, além de revogar o consentimento a qualquer momento
        (LGPD, art. 18). Escreva para {CONTATO_EMAIL}. Respondemos em até [15] dias. Você também pode
        reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>7. Segurança</h2>
      <p>
        Os dados ficam em infraestrutura com acesso restrito e criptografia em trânsito (HTTPS) e em
        repouso. Nenhum sistema é totalmente imune a incidentes; se houver um que afete seus dados,
        avisaremos conforme a lei.
      </p>

      <h2>8. Menores de idade</h2>
      <p>
        GTA é um jogo com classificação para maiores. O cadastro no resumo é destinado a maiores de
        18 anos.
      </p>

      <h2>9. Mudanças</h2>
      <p>Se esta política mudar, a data no topo será atualizada.</p>
    </article>
  )
}

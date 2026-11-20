import { CONTATO_EMAIL, ROCKSTAR_URL } from '../config.js'

export default function Termos() {
  return (
    <article>
      <h1>Termos de uso</h1>
      <p className="legal__date">Última atualização: [DATA]</p>

      <h2>1. O que é este site</h2>
      <p>
        O GTA 6 Notícias reúne notícias, notas de atualização e clipes da comunidade sobre GTA 6.
        É um projeto de fãs, sem afiliação, patrocínio ou endosso da Rockstar Games ou da Take-Two
        Interactive. A fonte oficial é o <a href={ROCKSTAR_URL}>site da Rockstar</a>.
      </p>

      <h2>2. Marcas e conteúdo de terceiros</h2>
      <p>
        Grand Theft Auto, GTA e marcas relacionadas pertencem aos seus donos. Notícias trazem link
        para a fonte original. Vídeos são exibidos por incorporação das plataformas onde foram
        publicados, sem cópia do arquivo.
      </p>

      <h2>3. Envio de clipes</h2>
      <p>Ao enviar um clipe, você declara que:</p>
      <ul>
        <li>gravou o clipe ou tem autorização de quem gravou;</li>
        <li>o conteúdo não viola direitos de terceiros nem a lei;</li>
        <li>
          autoriza o GTA 6 Notícias a exibir o clipe, por incorporação ou link, com crédito a você,
          sem pagamento e sem exclusividade.
        </li>
      </ul>
      <p>Você pode pedir a remoção a qualquer momento pelo e-mail {CONTATO_EMAIL}.</p>

      <h2>4. Remoção de conteúdo</h2>
      <p>
        Se você é dono de algum conteúdo exibido aqui e quer que ele saia, escreva para{' '}
        {CONTATO_EMAIL} com o link da página. Analisamos e respondemos em até [5] dias úteis.
      </p>

      <h2>5. Precisão das informações</h2>
      <p>
        Fazemos curadoria, mas notícias mudam rápido. Rumores são marcados como rumores. Não
        garantimos que toda informação esteja completa ou atualizada; confirme decisões importantes
        na fonte oficial.
      </p>

      <h2>6. Uso aceitável</h2>
      <p>
        Não é permitido usar o site para enviar spam, conteúdo ilegal ou tentar comprometer sua
        segurança.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados está descrito na <a href="/privacidade.html">política de privacidade</a>.
      </p>

      <h2>8. Alterações e foro</h2>
      <p>
        Estes termos podem mudar; a data no topo indica a versão em vigor. Fica eleito o foro da
        comarca de [CIDADE/UF], salvo regra legal em contrário, como o foro do domicílio do
        consumidor.
      </p>
    </article>
  )
}

import Reveal from './Reveal.jsx'

const regras = [
  { tipo: 'Notícia', texto: 'Link pra fonte original em todo post.' },
  { tipo: 'Clipe', texto: 'Crédito e link pra quem gravou.' },
  { tipo: 'Patch', texto: 'Notas resumidas em português.' },
  { tipo: 'Rumor', texto: 'Marcado como rumor até ter confirmação.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="section section--light sobre">
      <div className="container sobre__grid">
        <Reveal>
          <h2 className="section__title">Feito por fã, para quem não quer perder nada</h2>
          <p>
            O GTA 6 Notícias nasceu de uma frustração simples: acompanhar o jogo exigia rodar fórum,
            rede social, canal de vídeo e site de notícia ao mesmo tempo. Juntamos tudo num feed com
            curadoria humana.
          </p>
          <p>
            Somos um projeto independente de fãs. Não temos ligação com a Rockstar Games ou a Take-Two.
            Pra informação oficial, o caminho é sempre o site da Rockstar.
          </p>
        </Reveal>
        <Reveal delay={160} className="feed" aria-label="Regras do feed">
          <div className="feed__head">Como cada post é marcado</div>
          {regras.map((r) => (
            <div key={r.tipo} className="feed__item">
              <span className="feed__label">{r.tipo}</span>
              <p>{r.texto}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

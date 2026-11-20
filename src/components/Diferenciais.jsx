import Reveal from './Reveal.jsx'

const itens = [
  {
    tag: 'Clipes',
    titulo: 'O caos mais engraçado do dia',
    texto: 'Curadoria diária dos clipes que valem o play: física quebrada, fugas absurdas e fails épicos.',
  },
  {
    tag: 'Patches',
    titulo: 'Patch notes traduzidos pra gente',
    texto: 'O que mudou, o que quebrou e o que isso significa pro seu save, explicado em português direto.',
  },
  {
    tag: 'Notícias',
    titulo: 'Última hora, com fonte',
    texto: 'Cada notícia aponta pra origem. Rumor vem marcado como rumor. Sem clickbait.',
  },
  {
    tag: 'Um feed só',
    titulo: 'Fim das abas aleatórias',
    texto: 'Tudo o que você caçava em fórum, rede social e canal de vídeo, num lugar organizado.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="section section--light diferenciais">
      <div className="container">
        <Reveal as="h2" className="section__title">Por que aqui e não em <span className="hl">dez sites</span>?</Reveal>
        <div className="bento">
          {itens.map((it, i) => (
            <Reveal as="article" key={it.tag} delay={140 + i * 90} className={`bcard bcard--${i}`}>
              {i === 0 && (
                <div className="bcard__media" aria-hidden="true">
                  <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width="128" height="128" loading="lazy" />
                </div>
              )}
              <div className="bcard__body">
                <h3>{it.titulo}</h3>
                <p>{it.texto}</p>
                <span className="bcard__tag"><span>{it.tag}</span><span aria-hidden="true">0{i + 1}</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

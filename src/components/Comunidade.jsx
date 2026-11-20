import Reveal from './Reveal.jsx'
import { CONTATO_EMAIL } from '../config.js'

const passos = [
  {
    titulo: 'Grave o momento',
    texto: 'Fail, fuga absurda, bug engraçado. Clipes curtos funcionam melhor.',
  },
  {
    titulo: 'Mande o link',
    texto: 'YouTube, Twitch, TikTok ou X. Diga seu nome ou @ pra gente creditar.',
  },
  {
    titulo: 'Crédito sempre',
    texto: 'Postamos com link pro seu canal. Pediu pra tirar, a gente tira.',
  },
]

export default function Comunidade() {
  return (
    <section id="comunidade" className="section section--dark comunidade">
      <div className="container">
        <div className="comu__grid">
          <Reveal className="comu__lead">
            <h2 className="section__title">Mande o seu clipe</h2>
            <p>
              O site está começando e ainda não temos avaliações de leitores pra mostrar.
              Em vez de inventar, abrimos espaço pra quem quer aparecer aqui.
            </p>
            <a className="btn btn-primary" href={`mailto:${CONTATO_EMAIL}?subject=Clipe%20para%20o%20GTA%206%20Noticias`}>
              Enviar clipe por e-mail
            </a>
            <small>Ao enviar, você concorda com os <a href="/termos.html">termos de uso</a>.</small>
          </Reveal>
          <ol className="passos">
            {passos.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 80} className={`passo passo--${i}`}>
                <span className="passo__num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

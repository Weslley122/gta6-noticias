import RockstarButton from './RockstarButton.jsx'
import porDoSolGif from '../assets/vice-city-sunset.gif'
import porDoSolEstatico from '../assets/vice-city-sunset.jpg'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <picture className="hero__backdrop" aria-hidden="true">
        <source media="(prefers-reduced-motion: reduce)" srcSet={porDoSolEstatico} />
        <img src={porDoSolGif} alt="" width="1200" height="800" fetchPriority="high" />
      </picture>
      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Notícias, patches e clipes de GTA{'\u00a0'}6.<span>Numa página só.</span>
          </h1>
          <p className="hero__lead">
            Cada post tem link pra fonte original: o site da Rockstar, as notas de atualização
            ou o canal de quem gravou o clipe. Quatro edições por dia, no horário de Brasília.
          </p>
          <div className="hero__ctas">
            <a href="#noticias" className="btn btn-primary">Ver notícias</a>
            <a href="#clipes" className="btn btn-ghost">Ver clipes</a>
            <RockstarButton />
          </div>
        </div>
      </div>
    </section>
  )
}

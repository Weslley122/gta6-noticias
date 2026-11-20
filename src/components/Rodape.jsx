import { ROCKSTAR_URL } from '../config.js'
import Arrow from './Arrow.jsx'
import Reveal from './Reveal.jsx'

export default function Rodape() {
  return (
    <footer className="footer">
      <Reveal className="container footer__grid">
        <div>
          <a href="/#topo" className="logo">
            <span className="logo__sun" aria-hidden="true" />
            <span>GTA 6 <b>NOTÍCIAS</b></span>
          </a>
          <p className="footer__tag">Clipes, patches e últimas horas num lugar só.</p>
        </div>
        <nav className="footer__links" aria-label="Rodapé">
          <a href="/#diferenciais">Diferenciais</a>
          <a href="/#sobre">Sobre</a>
          <a href="/#horario">Horário</a>
          <a href="/privacidade.html">Privacidade</a>
          <a href="/termos.html">Termos</a>
          <a href={ROCKSTAR_URL} target="_blank" rel="noopener noreferrer">Site oficial da Rockstar <Arrow /></a>
        </nav>
      </Reveal>
      <Reveal delay={140} className="container footer__legal">
        <p>
          Site de fã, não oficial. Sem afiliação, patrocínio ou endosso da Rockstar Games ou da
          Take-Two Interactive. Grand Theft Auto, GTA e marcas relacionadas pertencem aos seus
          respectivos donos.
        </p>
        <p>© {new Date().getFullYear()} GTA 6 Notícias</p>
      </Reveal>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import RockstarButton from './RockstarButton.jsx'

const links = [
  ['#noticias', 'Notícias'],
  ['#diferenciais', 'Diferenciais'],
  ['#clipes', 'Clipes da semana'],
  ['#sobre', 'Sobre'],
  ['#horario', 'Horário'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#topo" className="logo" aria-label="GTA 6 Notícias, início">
          <span className="logo__sun" aria-hidden="true" />
          <span>GTA 6 <b>NOTÍCIAS</b></span>
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <span /><span /><span />
        </button>
        <nav id="menu" className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <RockstarButton className="btn--sm" />
        </nav>
      </div>
    </header>
  )
}

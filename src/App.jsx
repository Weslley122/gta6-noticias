import { useEffect } from 'react'
import { revelarAoRolar } from './revelar.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Noticias from './components/Noticias.jsx'
import Diferenciais from './components/Diferenciais.jsx'
import ClipesDaSemana from './components/ClipesDaSemana.jsx'
import Sobre from './components/Sobre.jsx'
import Horario from './components/Horario.jsx'
import ChamadaFinal from './components/ChamadaFinal.jsx'
import Rodape from './components/Rodape.jsx'


export default function App() {
  useEffect(() => revelarAoRolar(), [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Noticias />
        <Diferenciais />
        <ClipesDaSemana />
        <Sobre />
        <Horario />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/900.css'
import './styles.css'
import App from './App.jsx'
import { animacaoLiberada } from './revelar.js'

// Antes do primeiro desenho, pra não piscar o conteúdo antes de esconder.
if (animacaoLiberada()) document.documentElement.classList.add('revela')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

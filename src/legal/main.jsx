import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/900.css'
import '../styles.css'
import LegalLayout from './LegalLayout.jsx'
import Privacidade from './Privacidade.jsx'
import Termos from './Termos.jsx'

const root = document.getElementById('root')
const Page = root.dataset.page === 'termos' ? Termos : Privacidade

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <LegalLayout>
      <Page />
    </LegalLayout>
  </React.StrictMode>
)

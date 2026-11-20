import Rodape from '../components/Rodape.jsx'

export default function LegalLayout({ children }) {
  return (
    <>
      <header className="nav nav--solid nav--static">
        <div className="container nav__inner">
          <a href="/" className="logo" aria-label="GTA 6 Notícias, início">
            <span className="logo__sun" aria-hidden="true" />
            <span>GTA 6 <b>NOTÍCIAS</b></span>
          </a>
          <a href="/" className="nav__back">Voltar ao site</a>
        </div>
      </header>
      <main className="legal">
        <div className="container legal__inner">
          <p className="legal__draft">
            Rascunho. Este texto não é aconselhamento jurídico. Revise com um profissional antes de
            publicar e preencha os campos entre colchetes.
          </p>
          {children}
        </div>
      </main>
      <Rodape />
    </>
  )
}

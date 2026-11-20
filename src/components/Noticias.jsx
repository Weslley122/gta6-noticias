import { useEffect, useRef, useState } from 'react'
import { EDICAO, GRUPOS, manchete, numeros, materias } from '../data/noticias.js'
import Reveal from './Reveal.jsx'

// Datas em AAAA-MM-DD viram "20 nov". Monta a data no fuso local pra não
// voltar um dia no Brasil (new Date('2026-11-20') seria meia-noite UTC).
const dataLocal = (iso) => {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d)
}
const fmtCurta = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' })
const fmtLonga = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long' })
const curta = (iso) => fmtCurta.format(dataLocal(iso)).replace('.', '')

const total = materias.length + 1 // + manchete
const destaques = [manchete, ...materias.filter((m) => m.destaque)].slice(0, 3)
const grupos = GRUPOS
  .map((g) => ({ ...g, itens: materias.filter((m) => m.grupo === g.id) }))
  .filter((g) => g.itens.length > 0)

function Meta({ item }) {
  return (
    <div className="noticia__meta">
      <span className="noticia__editoria">{item.editoria}</span>
      <time dateTime={item.data}>{curta(item.data)}</time>
      {item.selo !== 'Notícia' && (
        <span className={`noticia__selo noticia__selo--${item.selo.toLowerCase()}`}>{item.selo}</span>
      )}
    </div>
  )
}

function Fontes({ fontes }) {
  return (
    <p className="noticia__fontes">
      <span>Fonte{fontes.length > 1 ? 's' : ''}:</span>{' '}
      {fontes.map((f, i) => (
        <span key={f.url}>
          {i > 0 && ', '}
          <a href={f.url} target="_blank" rel="noopener noreferrer">{f.nome}</a>
        </span>
      ))}
    </p>
  )
}

export default function Noticias() {
  const [aberto, setAberto] = useState(false)
  const secRef = useRef(null)

  const abrir = () => setAberto(true)

  const fechar = () => {
    setAberto(false)
    const sec = secRef.current
    if (sec && sec.getBoundingClientRect().top < 0) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Links "#noticias" (menu, botão do topo) abrem a aba.
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest?.('a[href="#noticias"]')) abrir()
    }
    document.addEventListener('click', onClick)
    if (window.location.hash === '#noticias') abrir()
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <section
      id="noticias"
      ref={secRef}
      className={`section section--light noticias ${aberto ? 'is-open' : ''}`}
    >
      <div className="container">
        <div className="noticias__painel">
          <Reveal
            as="button"
            type="button"
            className="noticias__toggle"
            aria-expanded={aberto}
            aria-controls="noticias-conteudo"
            onClick={aberto ? fechar : abrir}
          >
            <span className="noticias__selo">
              {fmtLonga.format(dataLocal(EDICAO.data))} · {EDICAO.chamada}
            </span>
            <span className="noticias__titulo">O que importa no GTA{' '}6 <span className="hl">agora</span></span>
            <span className="noticias__sub">
              Vendas, crítica, preço no Brasil e o que ainda é rumor. Tudo com link pra fonte original.
            </span>
            <span className="noticias__acao">
              {aberto ? 'Fechar notícias' : `Abrir as ${total} notícias`}
              <span className="noticias__chevron" aria-hidden="true" />
            </span>
          </Reveal>

          {!aberto && (
            <ol className="noticias__preview" aria-label="Principais manchetes">
              {destaques.map((n, i) => (
                <Reveal as="li" key={n.titulo} delay={140 + i * 90}>
                  <button type="button" onClick={abrir} className="npreview">
                    <span className="npreview__editoria">{n.editoria}</span>
                    <span className="npreview__titulo">{n.titulo}</span>
                  </button>
                </Reveal>
              ))}
            </ol>
          )}
        </div>

        <div
          id="noticias-conteudo"
          className="noticias__conteudo"
          aria-hidden={!aberto}
          inert={aberto ? undefined : ''}
        >
          <div className="noticias__conteudo-inner">
            <div className="noticias__abertura">
              <article className="manchete">
                <Meta item={manchete} />
                <h3 className="manchete__titulo">{manchete.titulo}</h3>
                <p className="manchete__texto">{manchete.texto}</p>
                <Fontes fontes={manchete.fontes} />
              </article>

              <aside className="placar" aria-label="Números do lançamento">
                <div className="placar__head">Em números</div>
                <dl>
                  {numeros.map((n) => (
                    <div key={n.rotulo} className="placar__item">
                      <dt>{n.rotulo}</dt>
                      <dd className="placar__valor">{n.valor}</dd>
                      <dd className="placar__nota">{n.nota}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>

            {grupos.map((g) => (
              <section key={g.id} className="ngrupo" aria-labelledby={`ngrupo-${g.id}`}>
                <h3 id={`ngrupo-${g.id}`} className="ngrupo__titulo">
                  {g.titulo}
                  <span>{g.itens.length} {g.itens.length > 1 ? 'matérias' : 'matéria'}</span>
                </h3>
                <div className="ngrupo__lista">
                  {g.itens.map((m) => (
                    <article key={m.titulo} className="noticia">
                      <Meta item={m} />
                      <h4 className="noticia__titulo">{m.titulo}</h4>
                      <p className="noticia__texto">{m.texto}</p>
                      <Fontes fontes={m.fontes} />
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <div className="noticias__rodape">
              <p className="noticias__aviso">
                Números de vendas e audiência são estimativas de terceiros até a Take-Two divulgar dados oficiais.
                Selo <b>Rumor</b>: ainda sem confirmação da Rockstar ou da Take-Two.
              </p>
              <button type="button" className="btn btn-outline" onClick={fechar}>
                Fechar notícias
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

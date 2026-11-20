import { useEffect, useRef, useState } from 'react'
import { clipes, SEMANA } from '../data/clipes.js'
import { CONTATO_EMAIL } from '../config.js'
import Reveal from './Reveal.jsx'

const formatViews = new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 })

function videoId(url) {
  const m = url.match(/\/video\/(\d+)/)
  return m ? m[1] : null
}

// Posição exata (em px) do topo do clipe i dentro do feed.
const topoDo = (feed, i) => feed.children[i]?.offsetTop ?? 0

const lista = clipes
  .map((c) => ({ ...c, id: videoId(c.url) }))
  .filter((c) => c.id)
  .sort((a, b) => (b.views || 0) - (a.views || 0))

export default function ClipesDaSemana() {
  const [aberto, setAberto] = useState(false)
  // Clipe que está na tela do feed. Só ele tem o player do TikTok montado;
  // os outros mostram uma capa até chegarem na tela.
  const [ativo, setAtivo] = useState(0)
  const secRef = useRef(null)
  const feedRef = useRef(null)

  const abrir = () => setAberto(true)

  const fechar = () => {
    setAberto(false)
    setAtivo(0) // reabre do primeiro clipe
    const sec = secRef.current
    if (sec && sec.getBoundingClientRect().top < 0) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  // Links "#clipes" (menu, botão do topo) abrem a aba.
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest?.('a[href="#clipes"]')) abrir()
    }
    document.addEventListener('click', onClick)
    if (window.location.hash === '#clipes') abrir()
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Navegação do feed: um giro de roda ou uma deslizada = um clipe, com uma
  // transição animada (desacelera no fim) em vez do pulo seco do navegador.
  useEffect(() => {
    const feed = feedRef.current
    if (!aberto || !feed) return
    const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ultimo = lista.length - 1
    let base = 0
    let timer
    let raf
    let animando = false
    let fimAnimacao = 0
    feed.scrollTop = 0

    const suavizar = (t) => 1 - Math.pow(1 - t, 4) // começa rápido, chega devagar

    const animarPara = (i) => {
      const alvo = Math.max(0, Math.min(ultimo, i))
      base = alvo
      setAtivo(alvo)
      const de = feed.scrollTop
      const para = topoDo(feed, alvo)
      if (Math.abs(para - de) < 1) return
      cancelAnimationFrame(raf)
      animando = true
      feed.style.scrollSnapType = 'none' // o snap do toque brigaria com a animação
      const inicio = performance.now()
      // Com "reduzir movimento" ligado no sistema, a transição fica mais curta
      // em vez de sumir (pular direto parece bug).
      const duracao = reduzMovimento ? 380 : 620
      const passo = (agora) => {
        const p = Math.min(1, (agora - inicio) / duracao)
        feed.scrollTop = de + (para - de) * suavizar(p)
        if (p < 1) {
          raf = requestAnimationFrame(passo)
        } else {
          animando = false
          fimAnimacao = performance.now()
          feed.style.scrollSnapType = ''
        }
      }
      raf = requestAnimationFrame(passo)
    }

    // Roda do mouse fora do vídeo: responde na hora, sem o pulinho nativo.
    const onWheel = (e) => {
      const dir = Math.sign(e.deltaY)
      if (!dir) return
      // Nas pontas do feed, deixa a página rolar normalmente.
      if ((dir < 0 && base === 0) || (dir > 0 && base === ultimo)) return
      e.preventDefault()
      if (animando || performance.now() - fimAnimacao < 180) return
      animarPara(base + dir)
    }

    // Roda em cima do vídeo (o player do TikTok não repassa o evento) e toque:
    // quando a rolagem para, segue na direção em que ela andou.
    const assentar = () => {
      const delta = feed.scrollTop - topoDo(feed, base)
      let alvo = base
      if (Math.abs(delta) > 24) {
        alvo = base + Math.sign(delta) * Math.max(1, Math.round(Math.abs(delta) / feed.clientHeight))
      }
      animarPara(alvo)
    }
    const onScroll = () => {
      if (animando) return
      clearTimeout(timer)
      timer = setTimeout(assentar, 90)
    }

    feed.addEventListener('wheel', onWheel, { passive: false })
    feed.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      feed.removeEventListener('wheel', onWheel)
      feed.removeEventListener('scroll', onScroll)
    }
  }, [aberto])

  const destaque = lista.slice(0, 3)

  return (
    <section
      id="clipes"
      ref={secRef}
      className={`section section--dark clipes ${aberto ? 'is-open' : ''}`}
    >
      <div className="container">
        <div className="clipes__painel">
          <Reveal
            as="button"
            type="button"
            className="clipes__toggle"
            aria-expanded={aberto}
            aria-controls="clipes-conteudo"
            onClick={aberto ? fechar : abrir}
          >
            <span className="clipes__selo">Top {lista.length} · {SEMANA || 'esta semana'}</span>
            <span className="clipes__titulo">Clipes da semana</span>
            <span className="clipes__sub">
              Os clipes BR de GTA 6 que mais bombaram no TikTok. Crédito e link pra quem gravou.
            </span>
            <span className="clipes__acao">
              {aberto ? 'Fechar clipes' : `Abrir os ${lista.length} clipes`}
              <span className="clipes__chevron" aria-hidden="true" />
            </span>
          </Reveal>

          {!aberto && destaque.length > 0 && (
            <ol className="clipes__preview" aria-label="Top 3 da semana">
              {destaque.map((c, i) => (
                <Reveal as="li" key={c.id} delay={140 + i * 90}>
                  <button type="button" onClick={abrir} className="preview">
                    <span className="preview__rank">#{i + 1}</span>
                    <span className="preview__body">
                      <span className="preview__autor">@{c.autor}</span>
                      <span className="preview__legenda">{c.legenda}</span>
                    </span>
                    <span className="preview__views">{formatViews.format(c.views)}</span>
                  </button>
                </Reveal>
              ))}
            </ol>
          )}
        </div>

        <div
          id="clipes-conteudo"
          className="clipes__conteudo"
          aria-hidden={!aberto}
          inert={aberto ? undefined : ''}
        >
          <div className="clipes__conteudo-inner">
            {aberto && lista.length === 0 && (
              <div className="clipes__vazio">
                <h3>Saindo do forno</h3>
                <p>Os clipes desta semana entram aqui em breve.</p>
              </div>
            )}

            {aberto && lista.length > 0 && (
              <div className="reel-wrap">
                <div
                  className="reel"
                  ref={feedRef}
                  tabIndex={0}
                  aria-label="Clipes da semana. Role ou deslize para ver o próximo."
                >
                  {lista.map((c, i) => (
                    <article key={c.id} className={`slide ${ativo === i ? 'is-active' : ''}`} data-index={i} aria-label={`Clipe de @${c.autor}`}>
                      <div className="slide__tela">
                        {ativo === i ? (
                          <iframe
                            src={`https://www.tiktok.com/player/v1/${c.id}?autoplay=1&description=1&music_info=1&rel=0`}
                            title={`Clipe de @${c.autor} no TikTok`}
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        ) : (
                          <div className="slide__capa" aria-hidden="true">
                            <span className="slide__capa-legenda">{c.legenda}</span>
                          </div>
                        )}
                      </div>
                      <div className="slide__info">
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="slide__autor">
                          @{c.autor}
                        </a>
                        {c.views > 0 && <span className="slide__views">{formatViews.format(c.views)} views</span>}
                        {c.legenda && <p className="slide__legenda">{c.legenda}</p>}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {aberto && (
              <div className="clipes__rodape">
                <p className="clipes__envio">
                  Gravou algo bom?{' '}
                  <a href={`mailto:${CONTATO_EMAIL}?subject=Clipe%20para%20o%20GTA%206%20Noticias`}>Mande o link</a>.
                  Ao enviar, você concorda com os <a href="/termos.html">termos de uso</a>.
                </p>
                <button type="button" className="btn btn-ghost" onClick={fechar}>
                  Fechar clipes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

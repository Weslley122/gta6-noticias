import { useRef, useState } from 'react'
import { NEWSLETTER_URL } from '../config.js'
import RockstarButton from './RockstarButton.jsx'
import Reveal from './Reveal.jsx'

// Mesma regra da Lambda (infra/template.yaml). O back-end valida de novo:
// esta checagem é só pra dar resposta rápida a quem digitou errado.
const EMAIL = /^[a-z0-9._%+-]{1,64}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,24}$/
const MAX_EMAIL = 254

export default function ChamadaFinal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const enviando = useRef(false) // trava síncrona: dois cliques rápidos = um envio só
  const armadilha = useRef(null)

  async function onSubmit(e) {
    e.preventDefault()
    if (enviando.current) return

    const limpo = email.trim().toLowerCase()
    if (limpo.length > MAX_EMAIL || !EMAIL.test(limpo)) {
      setStatus('invalido')
      return
    }
    // Campo escondido: pessoa não vê, robô preenche. Finge sucesso e não envia.
    if (armadilha.current?.value) {
      setStatus('ok')
      setEmail('')
      return
    }
    if (!NEWSLETTER_URL) {
      setStatus('demo')
      return
    }

    enviando.current = true
    setStatus('loading')
    const controle = new AbortController()
    const prazo = setTimeout(() => controle.abort(), 8000)
    try {
      const res = await fetch(NEWSLETTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: limpo }),
        credentials: 'omit',
        referrerPolicy: 'strict-origin-when-cross-origin',
        signal: controle.signal,
      })
      if (res.ok) {
        setStatus('ok')
        setEmail('')
      } else {
        setStatus(res.status === 429 ? 'limite' : res.status === 400 ? 'invalido' : 'error')
      }
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(prazo)
      enviando.current = false
    }
  }

  const msg = {
    ok: 'Pronto! Você vai receber o giro do dia.',
    error: 'Não deu certo agora. Tente de novo em instantes.',
    invalido: 'Confira o e-mail: parece que tem algo errado nele.',
    limite: 'Muitas tentativas seguidas. Espere alguns minutos e tente de novo.',
    demo: 'Modo demonstração: configure VITE_NEWSLETTER_URL para ativar o cadastro.',
  }[status]

  const carregando = status === 'loading'

  return (
    <section id="cta" className="cta">
      <div className="container cta__inner">
        <Reveal as="h2">Pare de procurar.<br />Comece a assistir.</Reveal>
        <Reveal delay={160} className="cta__side">
          <p>Receba o resumo diário de notícias, patches e os clipes mais engraçados no seu e-mail.</p>
          <form className="cta__form" onSubmit={onSubmit} noValidate>
            <label htmlFor="email" className="sr-only">Seu e-mail</label>
            <input
              id="email"
              type="email"
              required
              maxLength={MAX_EMAIL}
              autoComplete="email"
              inputMode="email"
              placeholder="seu@email.com"
              value={email}
              disabled={carregando}
              aria-invalid={status === 'invalido'}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'invalido') setStatus('idle')
              }}
            />
            <div className="cta__hp" aria-hidden="true">
              <label htmlFor="site">Não preencha este campo</label>
              <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" ref={armadilha} />
            </div>
            <button className="btn btn-dark" disabled={carregando} aria-busy={carregando}>
              {carregando ? 'Enviando...' : 'Quero o giro diário'}
            </button>
          </form>
          <small className="cta__legal">
            Usamos seu e-mail só pra enviar o resumo. Saiba mais na{' '}
            <a href="/privacidade.html">política de privacidade</a>.
          </small>
          {msg && <p className="cta__msg" role="status">{msg}</p>}
          <RockstarButton className="btn-rockstar--light" />
        </Reveal>
      </div>
    </section>
  )
}

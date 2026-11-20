// Entrada suave das seções ao rolar a página.
//
// Os itens marcados com data-anim (via <Reveal>) começam escondidos e entram
// em cascata quando a SEÇÃO deles chega na tela. O estado fica na seção
// (atributo data-visto), não no item: assim, itens que somem e voltam, como a
// prévia das abas de notícias e clipes, reaparecem sem animar de novo.
//
// Cuidados pra não atrapalhar ninguém:
// - a classe .revela, que esconde os itens, só entra se houver
//   IntersectionObserver e o sistema não pedir "reduzir movimento" (main.jsx);
// - sem JavaScript, nada fica escondido;
// - seção que já ficou acima da tela (link com âncora, recarregar no meio da
//   página) aparece na hora, sem esperar rolagem;
// - navegar com Tab até um item escondido revela a seção na hora.

export function animacaoLiberada() {
  return (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function revelarAoRolar() {
  if (!document.documentElement.classList.contains('revela')) return () => {}

  // Toda seção abaixo do topo "nasce" (CSS), mais qualquer uma com itens data-anim.
  const secoes = new Set(document.querySelectorAll('main > section:not(.hero), body footer'))
  document.querySelectorAll('[data-anim]').forEach((el) => {
    const s = el.closest('section, footer')
    if (s) secoes.add(s)
  })

  const timers = []
  const mostrar = (s) => {
    s.setAttribute('data-visto', '')
    io.unobserve(s)
    // Quando a abertura termina, o CSS tira o recorte de vez. O timer cobre o
    // caso de o navegador não avisar o fim da transição (aba em segundo plano).
    const nasceu = () => s.setAttribute('data-nasceu', '')
    s.addEventListener('transitionend', (e) => {
      if (e.target === s && e.propertyName === 'clip-path') nasceu()
    })
    timers.push(setTimeout(nasceu, 1200))
  }

  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting || e.boundingClientRect.top < 0) mostrar(e.target)
      }
    },
    // Dispara quando a seção já passou um pouco da borda de baixo da tela.
    { rootMargin: '0px 0px -10% 0px' }
  )
  secoes.forEach((s) => {
    if (!s.hasAttribute('data-visto')) io.observe(s)
  })

  const onFocus = (e) => {
    const s = e.target.closest?.('section, footer')
    if (s && secoes.has(s) && !s.hasAttribute('data-visto')) mostrar(s)
  }
  document.addEventListener('focusin', onFocus)

  return () => {
    io.disconnect()
    timers.forEach(clearTimeout)
    document.removeEventListener('focusin', onFocus)
  }
}

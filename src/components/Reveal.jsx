// Marca o elemento pra entrar junto com a seção dele quando ela chega na tela.
// `delay` (ms) monta a cascata entre os itens da mesma seção.
// A lógica fica em src/revelar.js; o visual, em .revela [data-anim] no CSS.
export default function Reveal({ as: Tag = 'div', delay = 0, style, children, ...rest }) {
  return (
    <Tag data-anim="" style={{ '--delay': `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}

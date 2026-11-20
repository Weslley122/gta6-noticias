import Reveal from './Reveal.jsx'

const agenda = [
  { hora: '08:00', titulo: 'Giro da manhã', desc: 'Resumo do que rolou durante a madrugada.' },
  { hora: '12:00', titulo: 'Clipes do almoço', desc: 'Os 10 clipes mais engraçados das últimas 24 h.' },
  { hora: '18:00', titulo: 'Patch & update', desc: 'Notas de atualização traduzidas e comentadas.' },
  { hora: '22:00', titulo: 'Plantão da noite', desc: 'Última hora, rumores checados e o melhor do dia.' },
]

export default function Horario() {
  return (
    <section id="horario" className="section section--dark horario">
      <div className="container">
        <Reveal as="h2" className="section__title">Quatro edições por dia. Você sabe quando voltar.</Reveal>
        <Reveal as="p" delay={90} className="horario__sub">
          Horário de Brasília, todos os dias. Notícia urgente entra na hora, fora da grade.
        </Reveal>
        <ol className="timeline">
          {agenda.map((a, i) => (
            <Reveal as="li" delay={200 + i * 100} key={a.hora} className="slot">
              <time>{a.hora}</time>
              <h3>{a.titulo}</h3>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

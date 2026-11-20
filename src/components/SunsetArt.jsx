// Ilustração vetorial original e animada: fim de tarde roxo e rosa num posto
// de beira de estrada, com coqueiros, fios de poste e um esportivo roxo no
// estilo dos cupês japoneses dos anos 90 (sem logo), soltando uma fumaça leve.
// Nada da arte oficial da Rockstar.
// A animação é sutil e fica pela metade quando o sistema pede "reduzir movimento".
export default function SunsetArt({ className = 'sunset-art', compact = false }) {
  const id = compact ? 'c' : 'h'
  // No card dos Diferenciais (formato largo) mostra só a faixa do posto e do carro.
  const viewBox = compact ? '0 316 480 220' : '0 0 480 600'
  const calmo = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const k = calmo ? 0.5 : 1 // intensidade do movimento

  // Coqueiro: o grupo de fora posiciona; o de dentro balança em torno da base.
  const palm = (x, base, h, flip, cor, chave, folha, balanco) => (
    <g key={chave} transform={`translate(${x} ${base}) ${flip ? 'scale(-1 1)' : ''}`} fill={cor}>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values={`${-balanco.amp * k} 0 0; ${balanco.amp * k} 0 0; ${-balanco.amp * k} 0 0`}
          dur={`${balanco.dur}s`}
          begin={`${balanco.atraso}s`}
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; .5; 1"
          keySplines=".45 0 .55 1; .45 0 .55 1"
        />
        <path d={`M0 0 C 5 ${-h * 0.45}, 12 ${-h * 0.8}, 22 ${-h}`} stroke={cor} strokeWidth={5 * folha} fill="none" strokeLinecap="round" />
        <g transform={`translate(22 ${-h})`}>
          {/* As folhas mexem um pouco mais que o tronco */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            additive="sum"
            values={`0; ${2.5 * k}; 0; ${-2 * k}; 0`}
            dur={`${balanco.dur * 0.7}s`}
            begin={`${balanco.atraso}s`}
            repeatCount="indefinite"
          />
          {[-80, -45, -12, 20, 52, 95, -125].map((a, i) => (
            <path key={i} transform={`rotate(${a}) scale(${folha})`} d="M0 0 C 24 -15, 56 -8, 80 18 C 56 4, 24 2, 0 0Z" />
          ))}
        </g>
      </g>
    </g>
  )

  const ondaSuave = { calcMode: 'spline', keyTimes: '0; .5; 1', keySplines: '.45 0 .55 1; .45 0 .55 1', repeatCount: 'indefinite' }

  return (
    <svg
      className={className}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustração animada de fim de tarde com posto de gasolina, coqueiros e um carro esportivo roxo"
    >
      <defs>
        <linearGradient id={`ceu-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a1b4d" />
          <stop offset=".3" stopColor="#56388a" />
          <stop offset=".55" stopColor="#a457a6" />
          <stop offset=".68" stopColor="#ef77ac" />
          <stop offset=".74" stopColor="#ffb3a7" />
        </linearGradient>
        <radialGradient id={`brilho-${id}`} cx=".3" cy=".72" r=".55">
          <stop offset="0" stopColor="#ffd9c2" stopOpacity=".75" />
          <stop offset="1" stopColor="#ffd9c2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`sol-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1dc" />
          <stop offset="1" stopColor="#ff9ac0" />
        </linearGradient>
        <linearGradient id={`chao-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a76b8" />
          <stop offset=".35" stopColor="#5b4b8a" />
          <stop offset="1" stopColor="#221a3d" />
        </linearGradient>
        {/* Pintura roxa do esportivo, com reflexo do céu em cima */}
        <linearGradient id={`carro-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b48cff" />
          <stop offset=".22" stopColor="#7d42e6" />
          <stop offset=".65" stopColor="#4b1fa0" />
          <stop offset="1" stopColor="#24104f" />
        </linearGradient>
        <linearGradient id={`vidro-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0a9d6" stopOpacity=".85" />
          <stop offset=".45" stopColor="#3a2668" />
          <stop offset="1" stopColor="#1a1036" />
        </linearGradient>
        {/* Faces do carro: capô pega o céu, frente meio-tom, lateral na sombra */}
        <linearGradient id={`capo-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9a8ff" />
          <stop offset=".5" stopColor="#9a66f2" />
          <stop offset="1" stopColor="#7440d8" />
        </linearGradient>
        <linearGradient id={`frente-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a52ea" />
          <stop offset=".6" stopColor="#6630c8" />
          <stop offset="1" stopColor="#3c1888" />
        </linearGradient>
        <linearGradient id={`lateral-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6a36cc" />
          <stop offset=".55" stopColor="#4a1f9e" />
          <stop offset="1" stopColor="#2a1160" />
        </linearGradient>
        <radialGradient id={`fumaca-${id}`}>
          <stop offset="0" stopColor="#efe8ff" stopOpacity="1" />
          <stop offset="1" stopColor="#efe8ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`farolfrente-${id}`}>
          <stop offset="0" stopColor="#fff4dc" stopOpacity=".9" />
          <stop offset="1" stopColor="#fff4dc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`farol-${id}`}>
          <stop offset="0" stopColor="#ff4f8b" stopOpacity=".9" />
          <stop offset="1" stopColor="#ff4f8b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Céu, brilho e sol se pondo (respiram devagar) */}
      <rect width="480" height="600" fill={`url(#ceu-${id})`} />
      <rect width="480" height="600" fill={`url(#brilho-${id})`}>
        <animate attributeName="opacity" values={`1; ${1 - 0.25 * k}; 1`} dur="7s" {...ondaSuave} />
      </rect>
      <circle cx="140" cy="440" r="64" fill={`url(#sol-${id})`} opacity=".9">
        <animate attributeName="r" values={`64; ${64 + 3 * k}; 64`} dur="7s" {...ondaSuave} />
      </circle>

      {/* Nuvens alongadas, derivando em velocidades diferentes */}
      <g>
        <animateTransform attributeName="transform" type="translate" values={`0 0; ${18 * k} 0; 0 0`} dur="26s" {...ondaSuave} />
        <g fill="#ffc0dc" opacity=".38">
          <ellipse cx="320" cy="150" rx="130" ry="9" />
          <ellipse cx="380" cy="170" rx="80" ry="5" />
        </g>
        <ellipse cx="330" cy="158" rx="110" ry="4" fill="#3b2768" opacity=".25" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values={`0 0; ${-14 * k} 0; 0 0`} dur="20s" {...ondaSuave} />
        <g fill="#ffc0dc" opacity=".38">
          <ellipse cx="110" cy="215" rx="120" ry="8" />
          <ellipse cx="200" cy="100" rx="70" ry="5" />
          <ellipse cx="60" cy="300" rx="90" ry="5" />
        </g>
        <ellipse cx="120" cy="222" rx="95" ry="4" fill="#3b2768" opacity=".25" />
      </g>

      {/* Pássaros cruzando o céu, batendo asas */}
      <g fill="none" stroke="#2a1b4d" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values={`0 0; ${-50 * k} ${-8 * k}; ${-100 * k} 0`} dur="16s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0; .7; .7; 0" keyTimes="0; .15; .85; 1" dur="16s" repeatCount="indefinite" />
        <path d="M318 118 q6 -6 12 0 q6 -6 12 0">
          <animate attributeName="d" values="M318 118 q6 -6 12 0 q6 -6 12 0; M318 118 q6 -1 12 0 q6 -1 12 0; M318 118 q6 -6 12 0 q6 -6 12 0" dur=".9s" repeatCount="indefinite" />
        </path>
        <path d="M352 106 q4 -4 8 0 q4 -4 8 0">
          <animate attributeName="d" values="M352 106 q4 -4 8 0 q4 -4 8 0; M352 106 q4 -1 8 0 q4 -1 8 0; M352 106 q4 -4 8 0 q4 -4 8 0" dur=".75s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Prédios baixos ao fundo, na névoa */}
      <path
        fill="#7d64ac"
        opacity=".55"
        d="M0 440 V404 h26 v-14 h34 v22 h40 v-10 h30 v42 Z M300 440 V396 h28 v-18 h22 v28 h36 v-12 h30 v20 h64 v26 Z"
      />

      {/* Coqueiros distantes */}
      {palm(70, 440, 190, false, '#6d4f9c', 'f1', 0.7, { amp: 1, dur: 7, atraso: 0 })}
      {palm(104, 440, 150, true, '#6d4f9c', 'f2', 0.6, { amp: 1.2, dur: 6, atraso: -2 })}
      {palm(400, 440, 210, true, '#6d4f9c', 'f3', 0.75, { amp: 1, dur: 7.5, atraso: -1 })}
      {palm(432, 440, 160, false, '#6d4f9c', 'f4', 0.6, { amp: 1.2, dur: 6.5, atraso: -3 })}

      {/* Fios de poste balançando de leve */}
      <g stroke="#2a1b4d" strokeWidth="1.4" fill="none" opacity=".75">
        <path d="M0 262 Q 230 312 452 300">
          <animate attributeName="d" values={`M0 262 Q 230 312 452 300; M0 262 Q 230 ${312 + 4 * k} 452 300; M0 262 Q 230 312 452 300`} dur="6s" {...ondaSuave} />
        </path>
        <path d="M0 274 Q 230 326 452 310">
          <animate attributeName="d" values={`M0 274 Q 230 326 452 310; M0 274 Q 230 ${326 + 4 * k} 452 310; M0 274 Q 230 326 452 310`} dur="6s" begin="-1s" {...ondaSuave} />
        </path>
      </g>
      <g fill="#2a1b4d" opacity=".85">
        <rect x="450" y="292" width="5" height="148" />
        <rect x="436" y="298" width="34" height="3" />
      </g>

      {/* Loja de conveniência (uma luz falha de vez em quando) */}
      <rect x="22" y="386" width="176" height="54" fill="#c9b6e8" />
      <rect x="22" y="380" width="176" height="8" fill="#fff0f6" />
      <rect x="34" y="400" width="152" height="20" fill="#ffd9a8" />
      <rect x="132" y="400" width="28" height="20" fill="#c9a07a">
        <animate attributeName="opacity" values="0; 0; .6; 0; .4; 0; 0" keyTimes="0; .7; .72; .74; .76; .78; 1" dur="6s" repeatCount="indefinite" />
      </rect>
      <g fill="#a28fcf">
        {[64, 96, 128, 160].map((x) => (
          <rect key={x} x={x} y="400" width="3" height="20" />
        ))}
      </g>
      <rect x="22" y="428" width="176" height="12" fill="#a995d6" />

      {/* Cobertura das bombas */}
      <rect x="214" y="362" width="7" height="78" fill="#9a86c6" />
      <rect x="336" y="362" width="7" height="78" fill="#9a86c6" />
      <rect x="186" y="338" width="182" height="20" fill="#f4ecff" />
      <rect x="186" y="353" width="182" height="5" fill="#ff7fb5" />
      <rect x="190" y="358" width="174" height="5" fill="#7a66a8" />
      <g fill="#fff6e0">
        <animate attributeName="opacity" values={`.9; ${0.9 - 0.35 * k}; .9`} dur="3.5s" {...ondaSuave} />
        <rect x="230" y="363" width="16" height="2" />
        <rect x="270" y="363" width="16" height="2" />
        <rect x="310" y="363" width="16" height="2" />
      </g>
      {[244, 300].map((x) => (
        <g key={x}>
          <rect x={x} y="408" width="16" height="32" fill="#f4ecff" />
          <rect x={x} y="408" width="16" height="6" fill="#ff7fb5" />
          <rect x={x + 4} y="418" width="8" height="6" fill="#7a66a8" />
        </g>
      ))}

      {/* Placa do posto com neon piscando */}
      <rect x="388" y="306" width="4" height="134" fill="#9a86c6" />
      <rect x="368" y="282" width="44" height="34" rx="3" fill="#f4ecff" />
      <text
        x="390"
        y="306"
        textAnchor="middle"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="900"
        fontSize="15"
        fill="#ff5fa2"
      >
        <animate attributeName="opacity" values="1; 1; .25; 1; .45; 1; 1" keyTimes="0; .8; .81; .83; .85; .87; 1" dur="7s" repeatCount="indefinite" />
        24H
      </text>

      {/* Chão / estacionamento */}
      <rect y="440" width="480" height="160" fill={`url(#chao-${id})`} />
      <g fill="#c9b6e8" opacity=".35">
        <polygon points="150,452 158,452 120,520 108,520" />
        <polygon points="230,452 238,452 226,520 214,520" />
        <polygon points="310,452 318,452 332,520 320,520" />
      </g>

      {/* Esportivo roxo no estilo Eclipse 97-99 (sem logo), de frente na diagonal:
          frente à esquerda, lateral sumindo pra direita. Chão em y=0.
          Tudo que fica na frente do carro usa a mesma inclinação (FRENTE_INC). */}
      <g transform="translate(116 528) scale(1.25 1.08)">
        <defs>
          <linearGradient id={`pneu-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3a3448" />
            <stop offset=".5" stopColor="#15111f" />
            <stop offset="1" stopColor="#08060d" />
          </linearGradient>
          <radialGradient id={`aro-${id}`} cx=".35" cy=".3" r=".8">
            <stop offset="0" stopColor="#f4f0ff" />
            <stop offset=".45" stopColor="#b7add6" />
            <stop offset="1" stopColor="#5d5480" />
          </radialGradient>
          <linearGradient id={`brilho-carro-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset=".5" stopColor="#ffe9f6" stopOpacity=".75" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`sombra-carro-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#0b0518" stopOpacity=".55" />
          </linearGradient>
          {/* desfoques pra sombras, brilhos e reflexos ficarem suaves */}
          <filter id={`blur1-${id}`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation=".7" /></filter>
          <filter id={`blur2-${id}`} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.8" /></filter>
          <filter id={`blur4-${id}`} x="-40%" y="-80%" width="180%" height="260%"><feGaussianBlur stdDeviation="4" /></filter>
          {/* recortes de cada face da carroceria */}
          <clipPath id={`clip-lateral-${id}`}>
            <path d="M150 -49 L163 -75 L176 -73 L232 -80 L243 -68 L243 -46 Q243 -30 238 -20 L172 -6 L150 -3 Z" />
          </clipPath>
          <clipPath id={`clip-frente-${id}`}>
            <path d="M1 -56 Q2 -62 7 -63 C30 -57 60 -53 90 -51 C115 -49 135 -48 150 -49 L150 -3 Q114 2 78 -2 Q40 -5 2 -14 Q-2 -36 1 -56 Z" />
          </clipPath>
          <clipPath id={`clip-capo-${id}`}>
            <path d="M6 -63 C25 -70 45 -77 57 -80 L163 -75 L150 -49 C135 -48 115 -49 90 -51 C60 -53 30 -57 6 -63 Z" />
          </clipPath>
          <clipPath id={`clip-parabrisa-${id}`}>
            <path d="M58 -80 C70 -91 80 -99 91 -103 L172 -103 L163 -76 Z" />
          </clipPath>
          <linearGradient id={`ceu-lataria-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6d9ff" stopOpacity=".55" />
            <stop offset="1" stopColor="#f6d9ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`arma-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a4258" />
            <stop offset=".35" stopColor="#24202d" />
            <stop offset="1" stopColor="#0c0a11" />
          </linearGradient>
        </defs>

        {/* fumaça do escapamento saindo por trás do carro */}
        {[0, 0.8, 1.6, 2.4].map((atraso, i) => (
          <circle key={i} cx="236" cy="-16" r="3" fill={`url(#fumaca-${id})`} opacity="0">
            <animate attributeName="cx" values={`236; ${252 + i * 2}; ${272 + i * 3}`} dur="3.2s" begin={`${atraso}s`} repeatCount="indefinite" />
            <animate attributeName="cy" values={`-16; -26; ${-44 - i * 2}`} dur="3.2s" begin={`${atraso}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="3; 8; 15" dur="3.2s" begin={`${atraso}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values={`0; ${0.5 * (0.7 + 0.3 * k)}; 0`} keyTimes="0; .25; 1" dur="3.2s" begin={`${atraso}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* reflexo do carro no asfalto (espelhado no chão, bem apagado) */}
        <g transform="scale(1 -0.22)" opacity=".13" filter={`url(#blur2-${id})`}>
          <use href={`#silhueta-${id}`} fill="#9a66f2" />
          <ellipse cx="104" cy="-44" rx="26" ry="5" fill="#fff4dc" opacity=".9" />
        </g>
        {/* sombra no chão: difusa + contato bem escuro embaixo do carro */}
        <ellipse cx="122" cy="-4" rx="132" ry="12" fill="#120d22" opacity=".45" filter={`url(#blur4-${id})`} />
        <path d="M6 -10 Q60 -2 114 2 L150 -1 L238 -16 L240 -10 L150 4 L112 6 Q55 2 4 -6 Z" fill="#07040e" opacity=".8" filter={`url(#blur1-${id})`} />

        {/* roda dianteira do outro lado, quase escondida */}
        <ellipse cx="12" cy="-9" rx="7" ry="9" fill={`url(#pneu-${id})`} />

        {/* ---------- carroceria ---------- */}
        <path
          id={`silhueta-${id}`}
          fill="#5a28b4"
          d="M2 -14 Q-2 -36 1 -56 Q2 -62 7 -63 C25 -70 45 -77 57 -80 C70 -92 80 -101 92 -105 C140 -108 182 -108 203 -104
             C222 -98 236 -84 243 -68 L243 -46 Q243 -30 238 -20 L172 -6 L150 -3 Q114 2 78 -2 Q40 -5 2 -14 Z"
        />
        {/* lateral na sombra, escurecendo embaixo */}
        <path fill={`url(#lateral-${id})`} d="M150 -49 L163 -75 L176 -73 L232 -80 L243 -68 L243 -46 Q243 -30 238 -20 L172 -6 L150 -3 Z" />
        <path fill={`url(#sombra-carro-${id})`} d="M150 -30 L240 -40 L240 -20 L172 -6 L150 -3 Z" />
        {/* linha do horizonte refletida na lateral: céu claro em cima, chão escuro embaixo */}
        <g clipPath={`url(#clip-lateral-${id})`}>
          <path fill={`url(#ceu-lataria-${id})`} d="M148 -80 L246 -86 L246 -47 L148 -37 Z" />
          <path fill="#12062a" opacity=".38" d="M148 -37 L246 -47 L246 -10 L148 0 Z" filter={`url(#blur1-${id})`} />
          <path d="M150 -37.5 L244 -47.5" stroke="#f3dcff" strokeWidth="1.6" opacity=".75" filter={`url(#blur1-${id})`} />
          {/* volume do para-lama traseiro */}
          <ellipse cx="226" cy="-44" rx="16" ry="10" fill="#c9a8ff" opacity=".18" filter={`url(#blur2-${id})`} />
        </g>
        {/* frente */}
        <path fill={`url(#frente-${id})`} d="M1 -56 Q2 -62 7 -63 C30 -57 60 -53 90 -51 C115 -49 135 -48 150 -49 L150 -3 Q114 2 78 -2 Q40 -5 2 -14 Q-2 -36 1 -56 Z" />
        <path fill={`url(#sombra-carro-${id})`} d="M2 -24 Q70 -16 150 -20 L150 -3 Q114 2 78 -2 Q40 -5 2 -14 Z" />
        <g clipPath={`url(#clip-frente-${id})`}>
          <path fill={`url(#ceu-lataria-${id})`} d="M-2 -64 L152 -50 L152 -34 L-2 -40 Z" opacity=".7" />
          <path d="M0 -39.5 Q76 -33 152 -35" stroke="#f3dcff" strokeWidth="1.3" fill="none" opacity=".6" filter={`url(#blur1-${id})`} />
          {/* bico arredondado: borda esquerda mais escura */}
          <path d="M-2 -60 Q-4 -36 2 -12" stroke="#1d0a45" strokeWidth="5" fill="none" opacity=".45" filter={`url(#blur2-${id})`} />
        </g>
        {/* capô refletindo o céu, com vinco central e brilho */}
        <path fill={`url(#capo-${id})`} d="M6 -63 C25 -70 45 -77 57 -80 L163 -75 L150 -49 C135 -48 115 -49 90 -51 C60 -53 30 -57 6 -63 Z" />
        <g clipPath={`url(#clip-capo-${id})`}>
          {/* nuvens e céu refletidos no capô */}
          <ellipse cx="70" cy="-70" rx="34" ry="3.4" fill="#fff" opacity=".28" filter={`url(#blur2-${id})`} />
          <ellipse cx="128" cy="-66" rx="24" ry="2.4" fill="#fff" opacity=".2" filter={`url(#blur2-${id})`} />
          <path d="M8 -63 C30 -57 60 -53 90 -51 C115 -49 135 -48 150 -49 L150 -54 C110 -55 60 -58 8 -66 Z" fill="#2a1160" opacity=".22" filter={`url(#blur1-${id})`} />
        </g>
        <path d="M24 -64 C60 -70 110 -70 158 -64" stroke={`url(#brilho-carro-${id})`} strokeWidth="3.2" fill="none" filter={`url(#blur1-${id})`} />
        <path d="M60 -58 C80 -66 120 -70 160 -70" stroke="#3a1a7a" strokeWidth=".6" fill="none" opacity=".35" />
        {/* linha onde o capô encontra a frente e o para-lama */}
        <path d="M7 -63 C30 -57 60 -53 90 -51 C115 -49 135 -48 150 -49" stroke="#e2cfff" strokeWidth=".9" fill="none" opacity=".7" />
        <path d="M150 -49 L163 -75" stroke="#2a1160" strokeWidth=".9" opacity=".6" />
        {/* brilho do para-lama dianteiro, acompanhando a caixa de roda */}
        <path d="M133 -43 Q156 -52 178 -42" stroke={`url(#brilho-carro-${id})`} strokeWidth="2.4" fill="none" />

        {/* para-brisa com reflexos e palhetas */}
        <path fill={`url(#vidro-${id})`} d="M58 -80 C70 -91 80 -99 91 -103 L172 -103 L163 -76 Z" />
        <g clipPath={`url(#clip-parabrisa-${id})`}>
          {/* interior: encostos de cabeça, bancos e volante aparecendo pelo vidro */}
          <g fill="#0c0420" opacity=".55" filter={`url(#blur1-${id})`}>
            <rect x="96" y="-98" width="12" height="9" rx="4" />
            <rect x="134" y="-97" width="12" height="9" rx="4" />
            <path d="M92 -90 L112 -90 L114 -76 L90 -76 Z" />
            <path d="M130 -89 L150 -89 L151 -76 L128 -76 Z" />
          </g>
          <ellipse cx="102" cy="-83" rx="7" ry="4" fill="none" stroke="#0c0420" strokeWidth="1.6" opacity=".6" />
          <path fill="#ffffff" opacity=".2" d="M84 -104 L104 -104 L84 -76 L70 -76 Z" filter={`url(#blur1-${id})`} />
          <path fill="#ffffff" opacity=".12" d="M112 -104 L120 -104 L100 -76 L94 -76 Z" />
          <path fill="#ffd0ea" opacity=".25" d="M58 -80 L70 -92 L172 -103 L172 -98 L66 -84 Z" filter={`url(#blur1-${id})`} />
        </g>
        <path d="M80 -79 L112 -84 M118 -78 L150 -83" stroke="#14092c" strokeWidth="1" strokeLinecap="round" />
        {/* vidro lateral */}
        <path fill={`url(#vidro-${id})`} d="M174 -101 L203 -101.5 C215 -98.5 224 -92 229 -85 L177 -74 Z" />
        <path fill="#ffffff" opacity=".14" d="M196 -101 L206 -101 L192 -77 L184 -76 Z" />
        <path d="M172 -103 L163 -76" stroke="#3a1a7a" strokeWidth="2.4" />
        <path d="M91 -103 C140 -106 185 -106 205 -103" stroke="#c9a8ff" strokeWidth="1" fill="none" opacity=".6" />
        {/* contorno rosado do pôr do sol na borda do teto */}
        <path d="M58 -80 C70 -92 80 -101 92 -105 C140 -108 182 -108 203 -104 C222 -98 236 -84 243 -68" stroke="#ffb3d6" strokeWidth="1.6" fill="none" opacity=".7" filter={`url(#blur1-${id})`} />
        {/* aerofólio discreto na traseira */}
        <path fill="#3a1a7a" d="M224 -80 L247 -75 L247 -71.6 L226 -76.4 Z" />
        <path d="M224 -80 L247 -75" stroke="#b48cff" strokeWidth=".6" opacity=".7" />
        {/* retrovisor */}
        <path fill="#4a1f9e" d="M172 -78 L182 -82 Q187 -80 186 -75 L176 -72 Z" />
        <path fill="#2a1160" d="M176 -72 L186 -75 L185.5 -73 L176.5 -70.6 Z" />
        {/* portas, maçaneta, vinco lateral e saia */}
        <path d="M178 -72 Q182 -40 178 -12 M232 -82 Q236 -50 234 -22" stroke="#1d0a45" strokeWidth=".9" fill="none" opacity=".9" />
        <path d="M207 -68 L214 -68.8" stroke="#1d0a45" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M152 -40 L240 -50" stroke="#a37bf0" strokeWidth="1" opacity=".55" />
        <path d="M150 -14 L238 -24" stroke="#1d0a45" strokeWidth="2" opacity=".5" />

        {/* ---------- frente (tudo na inclinação da frente do carro) ---------- */}
        {/* faróis: carcaça escura, refletores e lente acesa */}
        <path fill="#1d0a45" d="M72 -50 Q104 -49.6 135 -46.4 Q135 -40.6 129 -38.4 Q100 -39 77 -41.4 Q71 -45 72 -50 Z" />
        <path fill="#fff4dc" d="M75 -48.6 Q104 -48.2 132.6 -45.2 Q132.4 -41.6 128 -40 Q100 -40.4 78.4 -42.6 Q74 -45 75 -48.6 Z" />
        <circle cx="90" cy="-45.4" r="2.6" fill="#fffaf0" stroke="#e9d9b8" strokeWidth=".5" />
        <circle cx="116" cy="-43.4" r="2.6" fill="#fffaf0" stroke="#e9d9b8" strokeWidth=".5" />
        <path fill="#1d0a45" d="M1 -58 Q14 -56 25.4 -53 Q24.4 -46.6 19.6 -44.6 Q9 -45 1 -46.6 Z" />
        <path fill="#fff4dc" d="M2 -57 Q14 -55 24 -52.4 Q23 -47 19 -45.6 Q9 -46 2 -47.4 Z" />
        <circle cx="12" cy="-51" r="2" fill="#fffaf0" />
        <circle cx="104" cy="-43" r="22" fill={`url(#farolfrente-${id})`} opacity=".55" filter={`url(#blur2-${id})`} />
        <circle cx="12" cy="-50" r="14" fill={`url(#farolfrente-${id})`} opacity=".45" filter={`url(#blur2-${id})`} />
        <ellipse cx="104" cy="-44" rx="30" ry="3" fill="#fff4dc" opacity=".25" filter={`url(#blur2-${id})`} />
        {/* vinco do para-choque */}
        <path d="M4 -30 Q60 -24 146 -28" stroke="#c9a8ff" strokeWidth=".9" fill="none" opacity=".4" />

        <g transform="skewY(6.3)">
          {/* placa alinhada com a frente */}
          <rect x="26" y="-44.2" width="29" height="16" rx="1.4" fill="#2a1160" />
          <rect x="27" y="-43.2" width="27" height="14" rx="1" fill="#f4f0ff" />
          <rect x="27" y="-43.2" width="27" height="3" rx="1" fill="#c9b6e8" />
          <text x="40.5" y="-32.2" textAnchor="middle" fontFamily="Montserrat, system-ui, sans-serif" fontWeight="700" fontSize="6.6" fill="#2a1160">
            ECL·97
          </text>
          {/* entrada de ar grande com colmeia */}
          <path fill="#140828" d="M20 -24 Q48 -22 80 -24 L78 -15 Q48 -13 22 -15 Z" />
          <g stroke="#3a2668" strokeWidth=".6">
            {[26, 32, 38, 44, 50, 56, 62, 68, 74].map((x) => (
              <line key={x} x1={x} y1="-23" x2={x - 1} y2="-15" />
            ))}
            <line x1="22" y1="-19.4" x2="78" y2="-19.4" />
          </g>
          {/* saídas laterais com faróis de neblina */}
          <path fill="#140828" d="M92 -31 L120 -31 L118 -22 L93 -22 Z" />
          <ellipse cx="111" cy="-26.6" rx="4.2" ry="2.8" fill="#e9e1ff" opacity=".85" />
          <path fill="#140828" d="M2 -30 L14 -30 L13 -22 L2 -22 Z" />
          {/* pisca âmbar no canto */}
          <path fill="#ffb347" d="M128 -44 L140 -44 L140 -39.6 L129 -39.6 Z" opacity=".9" />
          {/* lábio inferior do para-choque */}
          <path d="M4 -12.8 Q78 -9 146 -21" stroke="#14092c" strokeWidth="1.6" fill="none" opacity=".7" />
        </g>

        {/* ---------- rodas em perspectiva: pneu, aro metálico, disco e porcas ---------- */}
        {[
          { cx: 156, cy: -21, sx: 0.7, sy: 1 },
          { cx: 226, cy: -27, sx: 0.55, sy: 0.82 },
        ].map((r) => (
          <g key={r.cx} transform={`translate(${r.cx} ${r.cy}) scale(${r.sx} ${r.sy})`}>
            <clipPath id={`arco-${id}-${r.cx}`}>
              <path d="M-25.5 2 A25.5 25.5 0 0 1 25.5 2 Z" />
            </clipPath>
            <path d="M-25.5 2 A25.5 25.5 0 0 1 25.5 2 Z" fill="#0f0620" />
            {/* sombra dentro da caixa de roda, em cima do pneu (recortada pra não vazar na lataria) */}
            <g clipPath={`url(#arco-${id}-${r.cx})`}>
              <path d="M-22 -4 A22 22 0 0 1 22 -4" stroke="#05020c" strokeWidth="7" fill="none" opacity=".7" filter={`url(#blur2-${id})`} />
            </g>
            <path d="M-25.5 2 A25.5 25.5 0 0 1 25.5 2" stroke="#c9a8ff" strokeWidth="1" fill="none" opacity=".55" />
            <circle r="21" fill={`url(#pneu-${id})`} />
            <circle r="19.4" fill="none" stroke="#4a4258" strokeWidth=".8" opacity=".7" />
            <circle r="14" fill={`url(#aro-${id})`} />
            <circle r="11.8" fill="#2a2440" />
            <circle r="9.4" fill="#6d6688" />
            <circle r="7.6" fill="#3a3352" />
            {[0, 72, 144, 216, 288].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <path d="M-2.1 -2.6 L-3.2 -12 L3.2 -12 L2.1 -2.6 Z" fill={`url(#aro-${id})`} />
                <path d="M2.1 -2.6 L3.2 -12" stroke="#4a4266" strokeWidth=".6" />
              </g>
            ))}
            <circle r="3.4" fill="#e9e1ff" />
            {[36, 108, 180, 252, 324].map((a) => (
              <circle key={a} cx={4.6 * Math.sin((a * Math.PI) / 180)} cy={-4.6 * Math.cos((a * Math.PI) / 180)} r=".7" fill="#4a4266" />
            ))}
          </g>
        ))}

        {/* ---------- M4A1 encostada na porta, coronha no chão ---------- */}
        <g transform="translate(190 -1) rotate(-71) scale(1.7)">
          {/* sombra da arma na porta */}
          <path d="M3 3 L48 -3" stroke="#0b0518" strokeWidth="4" opacity=".4" strokeLinecap="round" filter={`url(#blur1-${id})`} />
          <g fill={`url(#arma-${id})`}>
            {/* coronha retrátil */}
            <path d="M0 -0.6 L0 -6.2 Q0 -6.8 0.8 -6.8 L8.6 -6.4 L10.8 -4.4 L10.8 -2.2 L4 -0.6 Z" />
            <rect x="9.6" y="-5.6" width="7" height="2.2" rx=".4" />
            {/* receptor inferior, guarda-mato, gatilho e empunhadura */}
            <path d="M16.2 -6.8 L28.8 -6.8 L28.8 -3 L22 -3 L21.4 -2.2 L16.2 -2.2 Z" />
            <path d="M17.8 -2.6 L21.2 -2.6 L20 3.4 Q18.6 3.8 16.8 3 Z" />
            <path d="M21 -2.6 Q22 0 24.4 -2.6" stroke="#24202d" strokeWidth=".8" fill="none" />
            {/* carregador curvo com nervuras */}
            <path d="M23.4 -3 L27.2 -3 Q28 1.2 29.4 4.8 L25.6 5.8 Q24.4 1.6 23.4 -3 Z" />
            {/* receptor superior, trilho picatinny e alavanca de manejo */}
            <path d="M16 -9.4 L29.6 -9.4 L29.6 -6.6 L16 -6.6 Z" />
            <rect x="16.6" y="-10.8" width="12.6" height="1.4" />
            <rect x="14.6" y="-9" width="2" height="1" />
            {/* guarda-mão com trilhos */}
            <rect x="29.4" y="-9" width="11.6" height="5.8" rx=".8" />
            {/* massa de mira, cano e quebra-chamas */}
            <path d="M39.8 -9 L40.6 -13 L41.8 -13 L41.6 -9 Z" />
            <rect x="40.8" y="-7" width="6.4" height="1.5" />
            <rect x="46.8" y="-7.6" width="3" height="2.7" rx=".4" />
          </g>
          {/* detalhes: dentes do trilho, janela de ejeção, seletor, nervuras e brilho */}
          <g stroke="#6a6080" strokeWidth=".35">
            {[17.4, 18.6, 19.8, 21, 22.2, 23.4, 24.6, 25.8, 27, 28.2].map((x) => (
              <line key={x} x1={x} y1="-10.8" x2={x} y2="-10.1" />
            ))}
            {[30.6, 32.2, 33.8, 35.4, 37, 38.6].map((x) => (
              <line key={x} x1={x} y1="-8.4" x2={x} y2="-3.8" />
            ))}
            <line x1="24.2" y1="-1" x2="26.4" y2="-1.4" />
            <line x1="24.8" y1="1.4" x2="27.4" y2="0.9" />
          </g>
          <rect x="22.6" y="-8.6" width="4.2" height="1.4" rx=".3" fill="#08060d" />
          <circle cx="19" cy="-5" r=".6" fill="#8a80a0" />
          <path d="M0.8 -6.6 L8.6 -6.2 M16 -9.2 L29.6 -9.2 M29.6 -8.8 L41 -8.8 M40.8 -6.9 L47 -6.9" stroke="#b9a8e8" strokeWidth=".4" opacity=".75" />
          {/* brilho especular do pôr do sol no metal (suave) */}
          <path d="M17 -8.6 L28 -8.6 M30 -8.2 L38 -8.2 M24 -2.6 L26.6 -2.6" stroke="#ffd0ea" strokeWidth=".9" opacity=".45" filter={`url(#blur1-${id})`} />
          {[47.6, 48.6].map((x) => (
            <line key={x} x1={x} y1="-7.4" x2={x} y2="-5.1" stroke="#08060d" strokeWidth=".35" />
          ))}
        </g>
      </g>

      {/* Coqueiros da frente */}
      {palm(16, 600, 330, false, '#1e1636', 'p1', 1.1, { amp: 1.4, dur: 6, atraso: -1 })}
      {palm(58, 600, 250, true, '#1e1636', 'p2', 0.9, { amp: 1.6, dur: 5.5, atraso: -2.5 })}
      {palm(474, 600, 300, true, '#1e1636', 'p3', 1.05, { amp: 1.4, dur: 6.5, atraso: 0 })}
    </svg>
  )
}

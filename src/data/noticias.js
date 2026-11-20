// Notícias da edição. A seção mostra a `manchete` em destaque, os `numeros`
// num painel ao lado e as `materias` em colunas, na ordem desta lista.
//
// Selos (campo `selo`):
//   'Notícia'    fato confirmado por fonte oficial ou por vários veículos
//   'Estimativa' número de consultoria/terceiros, sem confirmação oficial
//   'Rumor'      relato não confirmado pela Rockstar ou pela Take-Two
//
// Formato de cada matéria:
// {
//   editoria: 'Vendas',
//   data: '2026-11-20',          // AAAA-MM-DD
//   selo: 'Notícia',
//   titulo: '...',
//   texto: '...',
//   fontes: [{ nome: 'Veículo', url: 'https://...' }],
// }
//
//   grupo: 'mercado',            // id de um dos GRUPOS abaixo
//   destaque: true,              // opcional: aparece na prévia com a aba fechada
//
// Apuração: 20/11/2026, dia seguinte ao lançamento (19/11).
export const EDICAO = {
  data: '2026-11-20',
  chamada: 'Dia 2 de GTA 6 nas lojas',
}

// Blocos em que as matérias aparecem com a aba aberta, nesta ordem.
export const GRUPOS = [
  { id: 'mercado', titulo: 'Audiência e mercado' },
  { id: 'critica', titulo: 'Crítica e prêmios' },
  { id: 'jogar', titulo: 'Onde e como jogar' },
  { id: 'futuro', titulo: 'O que vem por aí' },
]

export const manchete = {
  editoria: 'Vendas',
  data: '2026-11-20',
  selo: 'Estimativa',
  titulo: 'GTA 6 vende cerca de 24,6 milhões de cópias e fatura US$ 2,36 bilhões até o fim do primeiro dia',
  texto:
    'A conta é da consultoria Sensor Tower, que soma pré-vendas e vendas do dia 19. Se confirmado, é o maior lançamento da história do entretenimento. ' +
    'O número é quase o triplo dos cerca de US$ 800 milhões que GTA V fez nas primeiras 24 horas, em 2013. ' +
    'Cerca de três quartos das vendas vieram do PS5. A Take-Two ainda não divulgou dados oficiais e diz que vai fazê-lo em breve.',
  fontes: [
    { nome: 'Notebookcheck', url: 'https://www.notebookcheck.net/GTA-6-passes-2-36-billion-in-estimated-launch-day-sales.1455216.0.html' },
    { nome: 'Deadline', url: 'https://deadline.com/2026/11/gta-6-sales-launch-day-surge-videogame-1237229514/' },
  ],
}

export const numeros = [
  { valor: '24,6 mi', rotulo: 'cópias até o fim do dia 1', nota: 'estimativa Sensor Tower' },
  { valor: 'US$ 2,36 bi', rotulo: 'em receita no lançamento', nota: 'estimativa Sensor Tower' },
  { valor: '99', rotulo: 'no Metacritic (PS5)', nota: 'empata o recorde histórico' },
  { valor: '7 mi+', rotulo: 'pessoas vendo lives ao mesmo tempo', nota: 'pico preliminar, Streams Charts' },
]

export const materias = [
  {
    editoria: 'Crítica',
    grupo: 'critica',
    destaque: true,
    data: '2026-11-18',
    selo: 'Notícia',
    titulo: 'Nota 99 no Metacritic: GTA 6 empata com Ocarina of Time como o jogo mais bem avaliado de todos os tempos',
    texto:
      'Com cerca de 150 análises no PS5, é a maior nota da Rockstar (GTA IV teve 98; GTA V e Red Dead Redemption 2, 97). ' +
      'As críticas que aparecem: missões da campanha engessadas, ritmo irregular em trechos e o limite de 30 fps.',
    fontes: [
      { nome: 'Notebookcheck', url: 'https://www.notebookcheck.net/GTA-6-reviews-award-99-Metacritic-score-topping-GTA-4-to-become-Rockstar-s-top-rated.1453363.0.html' },
      { nome: 'Dot Esports', url: 'https://dotesports.com/gta/news/gta-6-review-roundup' },
    ],
  },
  {
    editoria: 'Streaming',
    grupo: 'mercado',
    destaque: true,
    data: '2026-11-20',
    selo: 'Estimativa',
    titulo: 'Estreia bate recorde de audiência ao vivo, e alanzoka puxa o Brasil',
    texto:
      'Somando Twitch, YouTube e Kick, o pico passou de 7 milhões de espectadores simultâneos nas primeiras horas (os dados preliminares variam entre 6,4 e 7,9 milhões). ' +
      'Nenhum lançamento de jogo teve tanta gente assistindo ao vivo. O russo HoneyMad liderou na Twitch, com mais de 642 mil pessoas; alanzoka chegou a cerca de 245 mil.',
    fontes: [
      { nome: 'Esports.gg', url: 'https://esports.gg/news/grand-theft-auto-6/gta-6-breaks-streaming-record-with-6-38-million-viewers/' },
      { nome: 'Insider Gaming', url: 'https://insider-gaming.com/gta-6-streaming-launch-record/' },
    ],
  },
  {
    editoria: 'Mercado',
    grupo: 'mercado',
    data: '2026-11-19',
    selo: 'Notícia',
    titulo: 'Recorde no jogo, queda na bolsa: ação da Take-Two fecha em baixa de 3,7% no dia da estreia',
    texto:
      'O papel fechou a US$ 208,65 num dia de mercado em queda, ainda cerca de 19% abaixo da máxima de julho. ' +
      'Strauss Zelnick, CEO da Take-Two, chama a demanda de "extraordinária", mas mantém a previsão do ano fiscal (US$ 8,0 a 8,2 bilhões em reservas líquidas) até ter os números fechados.',
    fontes: [
      { nome: '24/7 Wall St.', url: 'https://247wallst.com/investing/2026/11/19/take-two-stock-just-sank-almost-4-on-the-day-gta-vi-launched-with-a-99-score/' },
      { nome: 'Benzinga', url: 'https://www.benzinga.com/trading-ideas/movers/26/11/63081533/gta-6-demand-is-extraordinary-but-take-two-ceo-isnt-ready-to-declare-victory' },
    ],
  },
  {
    editoria: 'Tecnologia',
    grupo: 'jogar',
    data: '2026-11-18',
    selo: 'Notícia',
    titulo: '30 fps nos dois PS5: no Pro é "quase perfeito", no modelo básico há quedas',
    texto:
      'Segundo a Digital Foundry, o jogo roda em 1440p interno a 30 fps no PS5 e no PS5 Pro; no Pro, o PSSR leva a imagem para perto de 4K. ' +
      'No PS5 básico, explosões pesadas derrubam a taxa para cerca de 23 fps. O gargalo é o processador, por isso não há modo de 60 fps.',
    fontes: [
      { nome: 'VGC', url: 'https://www.videogameschronicle.com/news/gta-6-base-ps5-performance-analysis-shows-struggle-to-maintain-30-fps-at-all-times/' },
      { nome: 'PC Gamer', url: 'https://www.pcgamer.com/games/grand-theft-auto/gta-6-looks-gorgeous-and-seeing-it-run-at-a-stable-30-fps-on-ageing-ps5-pro-hardware-makes-me-hopeful-for-pc-performance/' },
    ],
  },
  {
    editoria: 'Prêmios',
    grupo: 'critica',
    data: '2026-11-17',
    selo: 'Notícia',
    titulo: 'Oito indicações no The Game Awards, incluindo Jogo do Ano',
    texto:
      'GTA 6 é o jogo mais indicado da edição, à frente de Control Resonant e Resident Evil Requiem (seis cada). ' +
      'Manni L. Perez, intérprete de Lucia, concorre a Melhor Atuação. A cerimônia é em 10 de dezembro, em Los Angeles.',
    fontes: [
      { nome: 'VGC', url: 'https://www.videogameschronicle.com/news/gta-6-is-the-most-nominated-game-at-the-game-awards-2026/' },
    ],
  },
  {
    editoria: 'Brasil',
    grupo: 'jogar',
    data: '2026-11-19',
    selo: 'Notícia',
    titulo: 'R$ 449,90 na versão Standard e R$ 549,90 na Ultimate, com legenda em português e sem dublagem',
    texto:
      'O preço é o mesmo na PlayStation Store e na loja do Xbox. O jogo ocupa 212 GB no PS5. ' +
      'Atenção no varejo: várias "caixas" vendidas mais baratas trazem só um código de download, sem disco.',
    fontes: [
      { nome: 'Exame', url: 'https://exame.com/pop/qual-e-o-preco-de-gta-6-no-brasil-veja-valores-para-ps5-e-xbox/' },
      { nome: 'Exame (tamanho e horário)', url: 'https://exame.com/tecnologia/gta-6-preco-tamanho-horario-brasil-ps5-xbox/' },
      { nome: 'Einerd', url: 'https://www.einerd.com/gta-6-idiomas-portugues-sem-dublagem/' },
    ],
  },
  {
    editoria: 'PC',
    grupo: 'futuro',
    data: '2026-11-19',
    selo: 'Rumor',
    titulo: 'Versão de PC segue sem data; relatório fala em início de 2027',
    texto:
      'Rockstar e Take-Two não confirmaram a versão de PC. A janela do primeiro trimestre de 2027 vem de um relatório do GamesBeat, sem confirmação oficial. ' +
      'Cuidado: os "downloads para PC" que circulam são falsos, e alguns trazem vírus.',
    fontes: [
      { nome: 'IBTimes', url: 'https://www.ibtimes.co.uk/gta-vi-pc-release-early-2027-report-1833680' },
      { nome: 'TweakTown', url: 'https://www.tweaktown.com/news/114580/grand-theft-auto-6-pc-and-physical-disc-news-will-come-from-rockstar-confirms-take-two/index.html' },
    ],
  },
  {
    editoria: 'Online',
    grupo: 'futuro',
    data: '2026-11-20',
    selo: 'Rumor',
    titulo: 'Modo online de GTA 6 ainda sem data; a aposta do mercado é 2027',
    texto:
      'A Rockstar não anunciou data nem janela para o multiplayer. A expectativa de 2027 vem de uma fala do CEO da Twitch, Dan Clancy, não da Rockstar. ' +
      'Enquanto isso, a Take-Two diz que o GTA Online atual segue recebendo conteúdo.',
    fontes: [
      { nome: 'Vice', url: 'https://www.vice.com/en/article/gta-6-online-release-date/' },
      { nome: 'The PC Enthusiast', url: 'https://thepcenthusiast.com/gta-6-online-release-date-multiplayer/' },
    ],
  },
  {
    editoria: 'Lançamento',
    grupo: 'jogar',
    data: '2026-11-19',
    selo: 'Notícia',
    titulo: 'Noite de estreia teve PSN instável, e o Xbox liberou o jogo também na nuvem',
    texto:
      'O Downdetector registrou até cerca de 2 mil relatos de falha no login da PSN no pico; a Sony não ligou o problema ao jogo. ' +
      'No Xbox, GTA 6 entrou no Cloud Gaming, que permite jogar também no Xbox One.',
    fontes: [
      { nome: 'Happy Gamer', url: 'https://happygamer.com/gta-6-launch-night-psn-ps5-update-sales-176014/' },
      { nome: 'Xbox Wire', url: 'https://news.xbox.com/en-us/2026/11/10/grand-theft-auto-6-comes-to-xbox-cloud-gaming-november-19/' },
    ],
  },
]

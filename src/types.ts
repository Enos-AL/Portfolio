export interface Project {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  fullDescription: string;
  problemSolved: string;
  features: string[];
  tags?: string[];
  technologies: string[];
  icon: string; // represent standard lucide icons
  coverGradient: string; // for high-tech beautiful placeholder backup
  hoverGradient: string; // secondary styling for visual hover effect
  coverImage?: string; // optional real screenshot, e.g. "/projects/sisgreg-cover.png"
  hoverImage?: string; // optional second image shown with a smooth transition on hover
}

export const projectsData: Project[] = [
  {
    id: "ed2-sisgreg-tfd",
    name: "ED² Sisgreg TFD",
    category: "Saúde Pública / Regulação / TFD",
    status: "Em desenvolvimento / implantação",
    description: "Sistema web avançado para apoiar a Secretaria Municipal de Saúde de Jordânia-MG na gestão e controle de regulação, TFD (Tratamento Fora do Domicílio) e transporte de pacientes.",
    fullDescription: "O ED² Sisgreg TFD é um sistema web desenvolvido sob medida para modernizar a gestão da regulação em saúde pública e do Tratamento Fora do Domicílio no município de Jordânia-MG. A solução organiza todos os fluxos operacionais e administrativos entre a recepção de pedidos, a equipe reguladora, o gestor de TFD, os Agentes Comunitários de Saúde (ACS), o setor de viagens e transportes, fornecendo visibilidade integrada de cada etapa clínica, social e logística.",
    problemSolved: "Descentralização de informações, filas desorganizadas para agendamentos de exames por TFD, falta de controle financeiro sobre ajuda de custo do TFD, e dificuldade em rastrear o fluxo dos pacientes que se deslocam de Jordânia-MG para outros polos médicos governamentais.",
    features: [
      "Cadastro e acompanhamento integrado de pacientes",
      "Organização e triagem automatizada de solicitações de regulação",
      "Fluxo inteligente e digital da regulação em saúde",
      "Agendamento de exames, consultas externas e retornos médicos",
      "Controle completo de viagens, frotas, motoristas e transporte sanitário",
      "Painel exclusivo para monitoramento de solicitações recomendadas pelos ACS",
      "Controle minucioso de diárias e ajuda de custo para despesas de viagem",
      "Painéis de controle administrativos em tempo real (Dashboards)",
      "Histórico clínico eletrônico e rastreabilidade total de processos judiciais ou prioritários",
      "Relatórios detalhados para apoio direto à tomada de decisões e auditorias"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    icon: "HeartPulse",
    coverGradient: "from-blue-600/20 via-blue-900/40 to-cyan-500/20",
    hoverGradient: "from-cyan-500/20 via-teal-900/40 to-emerald-500/20"
  },
  {
    id: "ed2-atlas-commerce",
    name: "ED² Atlas Commerce",
    category: "E-commerce / SaaS / White-label",
    status: "Em desenvolvimento",
    description: "Plataforma comercial white-label altamente customizável voltada para lojas e redes de varejo, com catálogo digital inteligente, administração centralizada e presença profissional instantânea.",
    fullDescription: "Uma solução SaaS de nível empresarial que permite a qualquer lojista implantar rapidamente seu e-commerce com layout otimizado, integração a sistemas de pagamento e controle administrativo avançado. A plataforma é white-label, permitindo que cada parceiro utilize sua marca e domínio próprio de forma totalmente integrada.",
    problemSolved: "Altos custos de comissionamento de grandes marketplaces e complexidade técnica para pequenos e médios varejistas desenvolverem ou manterem canais de vendas próprios seguros e escaláveis.",
    features: [
      "Catálogo dinâmico de produtos com busca indexada super rápida",
      "Administrador centralizado de estoques, categorias e variações",
      "Painel de pedidos com fluxo de status em tempo real (Checkout inteligente)",
      "Páginas otimizadas para carregamento rápido e mobile-first (SEO Premium)",
      "Sistema de cupom de desconto flexível e regras promocionais automáticas",
      "Integrações de entrega (correios, transportadoras e frete local customizado)",
      "Suporte a múltiplos domínios e customização de tema (White-Label)"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "API RESTful"],
    icon: "ShoppingBag",
    coverGradient: "from-indigo-600/20 via-slate-900/40 to-blue-500/20",
    hoverGradient: "from-blue-500/20 via-indigo-900/45 to-purple-600/30"
  },
  {
    id: "ed2-media-toolkit",
    name: "ED² Media Toolkit",
    category: "Desktop / Mídia / Automação",
    status: "Funcional / Produto em evolução",
    description: "Aplicativo nativo para desktop focado em download, conversão, manipulação e organização de mídias de vídeo e áudio em alta performance.",
    fullDescription: "O ED² Media Toolkit é uma suíte de ferramentas de desktop para engenheiros de som, criadores de conteúdo e profissionais de mídia, integrando ferramentas de baixo nível de renome como yt-dlp e ffmpeg através de uma interface de usuário extremamente rápida, intuitiva e moderna.",
    problemSolved: "Interfaces confusas ou cheias de anúncios de ferramentas de conversão online de áudio/vídeo que degradam a qualidade dos arquivos ou infectam as máquinas com vírus de publicidades invasivas.",
    features: [
      "Download de vídeos em resoluções até 4K com extração de áudio de alta definição",
      "Conversão em lote ultra-rápida entre múltiplos formatos (MP4, MKV, MP3, FLAC, WAV, etc.)",
      "Compressão inteligente de arquivos mantendo o máximo de fidelidade de áudio e vídeo",
      "Divisor de áudio/vídeo e mesclador de trilhas auxiliares",
      "Interface gráfica intuitiva de fácil utilização com monitor de progresso em tempo real",
      "Processamento local na GPU acelerador por hardware"
    ],
    technologies: ["Electron", "Node.js", "ffmpeg", "yt-dlp", "React", "TypeScript", "Tailwind CSS"],
    icon: "Video",
    coverGradient: "from-purple-600/20 via-slate-900/40 to-pink-500/20",
    hoverGradient: "from-pink-500/20 via-fuchsia-900/45 to-purple-800/30"
  },
  {
    id: "ed2-screen-recorder",
    name: "ED² Screen Recorder",
    category: "Desktop / Gravação de Tela",
    status: "Em desenvolvimento",
    description: "Utilitário desktop de alta fidelidade para gravação de tela, webcams e microfones, otimizado para tutoriais rápidos, apresentações técnicas e treinamentos corporativos.",
    fullDescription: "Construído sob uma arquitetura de baixo consumo de recursos, este software de gravação de tela oferece aos desenvolvedores, gerentes de produto e educadores uma ferramenta profissional para capturar conteúdo a 60fps sem sobrecarregar a memória do computador, permitindo exportações compactas instantâneas.",
    problemSolved: "Configurações pesadas e complexas de softwares como OBS Studio para gravações simples do cotidiano corporativo, ou limitação de tempo e marcas d'água de gravadores web gratuitos.",
    features: [
      "Gravação de múltiplos monitores simultaneamente em resoluções nativas",
      "Modo picture-in-picture dinâmico para câmera e tela",
      "Captura de som do sistema interno e canais independentes de microfone",
      "Atalhos globais configuráveis para iniciar, pausar e finalizar",
      "Ferramentas de anotação na tela em tempo real durante a gravação",
      "Salvamento inteligente direto em disco com autotratamento antivazamento"
    ],
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "WebRTC MediaStream API", "Node.js"],
    icon: "MonitorPlay",
    coverGradient: "from-emerald-600/20 via-neutral-900/40 to-teal-500/20",
    hoverGradient: "from-teal-500/20 via-emerald-950/45 to-cyan-500/30"
  },
  {
    id: "ed2-voice-lab",
    name: "ED² Voice Lab",
    category: "Inteligência Artificial / Voz",
    status: "Em desenvolvimento",
    description: "Laboratório inteligente para experimentações, síntese avançada de fala e inteligência de voz em tempo real otimizada para o dialeto português brasileiro.",
    fullDescription: "O ED² Voice Lab é um ambiente de pesquisa e inovação focado no processamento de linguagem falada (NLP / TTS / ASR). Ele serve para realizar experimentos de modulação de voz, clonagem de timbre consentida, conversão texto-para-fala estilizada e prototipação de fluxos de voz automatizados para assistentes digitais.",
    problemSolved: "Falta de naturalidade e expressividade emocional em APIs TTS (Text-to-Speech) padrão de grandes corporações quando aplicadas ao contexto e entonações regionais do Português do Brasil.",
    features: [
      "Síntese de voz com ajuste fino de velocidade, altura, respirações e inflexões",
      "Conversão instantânea de texto para arquivos de áudio em alta fidelidade",
      "Processamento de sotaques regionais e termos coloquiais brasileiros",
      "Interface laboratorial interativa para engenharia de prompts de voz",
      "Módulo de visualização e edição de ondas espectrais correspondentes"
    ],
    technologies: ["Node.js", "Python AI Engines", "React", "TypeScript", "Tailwind CSS", "Web Audio API", "Siri/TTS Models"],
    icon: "Mic",
    coverGradient: "from-orange-600/20 via-slate-900/40 to-yellow-500/20",
    hoverGradient: "from-yellow-500/20 via-amber-900/45 to-orange-500/30"
  },
  {
    id: "ed2-voice-core",
    name: "ED² Voice Core",
    category: "Inteligência Artificial / Motor de Voz",
    status: "Em desenvolvimento",
    description: "Motor técnico backend para processamento, geração e orquestração de APIs de voz inteligentes, projetado para bom desempenho sob alta concorrência.",
    fullDescription: "O núcleo operacional backend que viabiliza ferramentas de áudio de alta performance. O ED² Voice Core expõe APIs seguras que processam texto, sintetizam áudio com baixa latência e lidam com pipelines profundos de processamento neural utilizando recursos locais ou de nuvem escalável.",
    problemSolved: "Latência elevada no processamento em tempo real de fluxos de voz em centrais de atendimento ou robôs industriais devido a pipelines ineficientes.",
    features: [
      "API REST e WebSocket de baixa latência para streaming de áudio",
      "Geração concorrente paralela assistida por hardware para múltiplos canais",
      "Suporte a caching agressivo de fonemas repetidos",
      "Sistema inteligente de fallback de voz em caso de instabilidade de grandes servidores externos",
      "Segurança com tokens temporários e conformidade regulamentar de identificação de voz"
    ],
    technologies: ["Node.js", "Express", "TypeScript", "Python Core", "gRPC", "Docker", "PyTorch integrations"],
    icon: "Cpu",
    coverGradient: "from-red-600/20 via-slate-900/40 to-orange-500/20",
    hoverGradient: "from-orange-500/20 via-red-950/45 to-pink-500/30"
  },
  {
    id: "ed2-padaria",
    name: "ED² Padaria",
    category: "ERP / Gestão Comercial",
    status: "Em desenvolvimento",
    description: "Sistema ERP completo sob medida para panificadoras e confeitarias, cobrindo vendas de balcão (PDV), estoque de ingredientes e financeiro dinâmico.",
    fullDescription: "O ED² Padaria é um ERP robusto focado em simplificar a complexidade operacional da gestão de panificadoras. O sistema integra de forma inteligente a entrada de matéria-prima (farinha, insumos), a cadeia de produção (geração de lotes de pães), o caixa rápido (PDV) e o controle financeiro administrativo em uma só plataforma unificada.",
    problemSolved: "Sistemas ERP tradicionais que não entendem a conversão de ingredientes de estoque para produtos fabricados por lote (fórmula interna do pão, perdas de produção de confeitaria).",
    features: [
      "Ponto de Venda (PDV) intuitivo, veloz e integrado com leitor de código de barras",
      "Ficha técnica e conversão de receitas com débito automático proporcional no estoque",
      "Controle de perdas de produção e desperdícios por lote",
      "Módulo financeiro com controle de caixa, contas a receber/pagar e fluxo de caixa",
      "Gestão de encomendas automatizada com notificações e calendário operacional",
      "Relatórios de lucros diários e projeção de compras de matéria-prima"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    icon: "Utensils",
    coverGradient: "from-amber-600/20 via-slate-900/40 to-yellow-600/25",
    hoverGradient: "from-amber-500/20 via-orange-950/45 to-yellow-500/30"
  },
  {
    id: "ed2-painel-chamada",
    name: "ED² Painel Chamada",
    category: "Atendimento / Painel Digital",
    status: "Em desenvolvimento",
    description: "Sistema inteligente para gerenciamento de atendimento presencial, emissão de senhas, filas de triagem e painel de TV para indicação sonora e visual.",
    fullDescription: "Uma solução multiplataforma para otimização do atendimento ao público em hospitais, clínicas, cartórios e repartições públicas. Sincroniza em tempo real as chamadas feitas pelos atendentes com o painel de TV visível para os clientes no saguão, emitindo sinais sonoros e apresentando mídias informativas complementares.",
    problemSolved: "Falta de organização visual na triagem e filas em órgãos públicos ou corporações e soluções caras de hardware proprietário para TVs de saguão.",
    features: [
      "Sincronização em tempo real utilizando conexões WebSocket estáveis",
      "Emissão de senhas personalizáveis para atendimento convencional, prioritário e clínico",
      "Voz sintetizada interna que pronuncia o nome ou senha chamada na TV automaticamente",
      "Painel gerencial com métricas de tempo médio de atendimento (TMA) e produtividade",
      "Layout personalizável para exibição de notícias, clima ou vídeos em paralelo com as senhas"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Socket.io", "SQLite/PostgreSQL"],
    icon: "Tv",
    coverGradient: "from-cyan-600/20 via-slate-900/40 to-blue-500/20",
    hoverGradient: "from-blue-500/20 via-cyan-950/45 to-teal-500/30"
  },
  {
    id: "ed2-convert-aud",
    name: "ED² Convert Aud",
    category: "Áudio / Conversão",
    status: "Em desenvolvimento",
    description: "Aplicativo web e desktop rápido para conversão, tratamento, compressão e normalização automatizada de arquivos de áudio para estúdios e rádios.",
    fullDescription: "Desenvolvido especificamente para resolver tarefas repetitivas de editores de áudio e emissoras de rádio. O sistema permite arrastar centenas de arquivos brutos por lote e convertê-los, aplicando redução inteligente de ruído e normalização de volume de acordo com padrões internacionais.",
    problemSolved: "Diferença drástica de volume entre arquivos de áudio de fontes externas diferentes, necessitando de processos manuais exaustivos de masterização.",
    features: [
      "Arraste e solte para processamento em lote em alta velocidade",
      "Normalização automática integrada (padrão de sonoridade EBU R128 para transmissões)",
      "Detecção inteligente de silêncios no início e fim de faixas musicais",
      "Conversão para formatos de transmissão profissionais (como WAV linear de alta definição e MP3 320kbps)",
      "Edição básica de tags ID3 e metadados de áudio de forma simultânea"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Web Audio API", "ffmpeg-wasm", "Tailwind CSS"],
    icon: "Sliders",
    coverGradient: "from-blue-600/20 via-slate-900/40 to-indigo-500/20",
    hoverGradient: "from-indigo-500/20 via-blue-950/45 to-cyan-500/30"
  },
  {
    id: "ed2-social",
    name: "ED² Social",
    category: "Marketing Digital / Conteúdo",
    status: "Em desenvolvimento",
    description: "Plataforma centralizada para gerenciamento corporativo de estratégias de redes sociais, acompanhamento de métricas, cronograma de postagens e insights inteligentes.",
    fullDescription: "O ED² Social unifica o gerenciamento de conteúdo da marca. Ideal para agências e profissionais de marketing, permite o planejamento visual das postagens em calendário intuitivo, controle de aprovação por parte de parceiros corporativos e análises integradas de alcance orgânico e pago em múltiplas redes.",
    problemSolved: "Desconexão entre a fase de planejamento, a criação das artes, a aprovação de posts pelo cliente final e a apuração real de métricas em múltiplos portais isolados.",
    features: [
      "Calendário interativo estilo Kanban para organização de campanhas semanais/mensais",
      "Status de aprovação colaborativa interna com registro de comentários",
      "Histórico de relatórios de desempenho social consolidados de forma simplificada",
      "Armazenamento centralizado de criativos, artes, hashtags preferidas e textos de legenda",
      "Sistema inteligente que sugere os melhores horários baseado em histórico de engajamento"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Analytics Engines"],
    icon: "Share2",
    coverGradient: "from-fuchsia-600/20 via-slate-900/40 to-rose-500/20",
    hoverGradient: "from-rose-500/20 via-purple-950/45 to-indigo-500/30"
  },
  {
    id: "ed2-tecnologic",
    name: "ED² Tecnologic",
    category: "Site Institucional / Empresa",
    status: "Funcional / Produto em evolução",
    description: "Portal institucional e portfólio tecnológico oficial da ED² Tecnologic, construído com UI/UX premium, animações fluidas e dados em tempo real.",
    fullDescription: "O atual canal oficial da empresa. Ele serve como espelho de excelência técnica da marca, utilizando tecnologia de ponta no ecossistema web para demonstrar na prática que o design responsivo, a fluidez de animações e a otimização de velocidade são pilares inegociáveis para qualquer software de alto impacto comercial.",
    problemSolved: "Falta de um portfólio tecnológico moderno, atrativo e poliglota no mercado local para demonstrar com clareza o escopo completo de sistemas inovadores desenvolvidos sob medida.",
    features: [
      "Design futurista responsivo de alta definição com atmosfera visual de vanguarda",
      "Efeito de paralaxe, grids de circuito e partículas animadas sem comprometer a performance",
      "Portfólio de sistemas interativo com visualização detalhada de problemas, recursos e stacks",
      "Contatos dinâmicos integrados para WhatsApp e links de e-mail profissionais",
      "Otimização para velocidade e acessibilidade (contraste, semântica, foco visível)",
      "Carregamento otimizado e compatibilidade com preferências de redução de movimento"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion (Framer Motion)", "Lucide Icons", "Vite"],
    icon: "Globe",
    coverGradient: "from-blue-700/25 via-slate-950/50 to-cyan-500/25",
    hoverGradient: "from-cyan-500/25 via-slate-950/50 to-green-500/25"
  },
  {
    id: "ed2-media-toolkit-overview",
    name: "ED² Media Overview",
    category: "Landing Page / Apresentação de Produto",
    status: "Em desenvolvimento",
    description: "Página de apresentação comercial de altíssimo impacto visual criada para demonstrar as potencialidades e benefícios da suíte ED² Media Toolkit.",
    fullDescription: "Uma landing page focada em conversão e vendas, com layouts dinâmicos, vídeos demonstrativos curtos, ilustrações técnicas dos codecs e uma interface projetada para guiar o profissional de áudio/vídeo a adquirir o produto desktop de forma imediata e transparente.",
    problemSolved: "Páginas de vendas comuns enfadonhas que não mostram de forma interativa a eficiência dos codecs ou a enorme velocidade do processamento local por hardware de aplicativos avançados.",
    features: [
      "Apresentações de recursos interativas com infográficos elegantes",
      "Tabela comparativa direta de velocidade de conversão com outras soluções conhecidas do mercado",
      "Sessão de documentação de atalhos e manuais breves de uso",
      "Área de download do instalador assinada digitalmente de forma limpa",
      "Efeitos de luz, revelações de rolagem dinâmicas para engajamento contínuo"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "High-Performance Composites"],
    icon: "Layout",
    coverGradient: "from-violet-700/25 via-slate-950/55 to-pink-500/25",
    hoverGradient: "from-pink-500/25 via-slate-950/55 to-cyan-500/25"
  }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const servicesData: Service[] = [
  {
    id: "dev-sistemas",
    title: "Desenvolvimento de Sistemas",
    description: "Criação de softwares corporativos robustos, arquitetura limpa, escalabilidade e performance projetados especificamente para as regras de negócio de sua empresa.",
    icon: "Code"
  },
  {
    id: "sites-web",
    title: "Sites e Aplicações Web",
    description: "Criação de sites corporativos de alto nível, portfólios, portais e aplicações web modernas de alto impacto, rápidas, responsivas e amigáveis ao SEO.",
    icon: "Globe"
  },
  {
    id: "suporte-tecnico",
    title: "Suporte Técnico e Manutenção",
    description: "Equipe preparada para manutenção corretiva, preventiva, suporte aos usuários e monitoramento contínuo para evitar paradas indesejadas no seu negócio.",
    icon: "Wrench"
  },
  {
    id: "redes-infra",
    title: "Redes e Infraestrutura",
    description: "Desenho de arquiteturas físicas e lógicas de redes, cabeamento estruturado, configuração de roteadores, servidores seguros e armazenamento confiável.",
    icon: "Network"
  },
  {
    id: "seguranca-info",
    title: "Segurança da Informação",
    description: "Auditoria de riscos, firewalls, proteção contra invasões, backups automáticos, políticas de privacidade e adequação de segurança para proteger o maior ativo do negócio.",
    icon: "ShieldAlert"
  },
  {
    id: "automacoes-integracoes",
    title: "Automação e Integrações",
    description: "Interligação de sistemas legados, criação de webhooks, robôs de automação inteligente, otimizando processos manuais em tarefas clicáveis e seguras.",
    icon: "Zap"
  },
  {
    id: "saude-publica",
    title: "Sistemas para Saúde Pública",
    description: "Soluções regulatórias avançadas, agendamentos médicos, teleconsulta, prontuários eletrônicos e gestão de TFD projetados sob leis do SUS brasileiro.",
    icon: "HeartPulse"
  },
  {
    id: "ia-solucoes",
    title: "Soluções com Inteligência Artificial",
    description: "Integração com LLMs avançadas, processamento e modelagem de fala, síntese de voz (TTS) para automatização de atendimento e produtividade operacional.",
    icon: "Bot"
  },
  {
    id: "app-desktop",
    title: "Aplicativos e Sistemas Desktop",
    description: "Softwares nativos de alto desempenho para Windows, macOS e Linux com integração profunda ao hardware local, downloads locais robustos e segurança offline.",
    icon: "Smartphone"
  }
];

export interface TechStack {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "other" | "desktop" | "specialty";
  icon: string;
}

export const techStackData: TechStack[] = [
  { name: "React", category: "frontend", icon: "Atom" },
  { name: "Next.js", category: "frontend", icon: "Layers" },
  { name: "TypeScript", category: "frontend", icon: "Shield" },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
  { name: "Node.js", category: "backend", icon: "Boxes" },
  { name: "Express", category: "backend", icon: "Server" },
  { name: "PostgreSQL", category: "database", icon: "Database" },
  { name: "Prisma ORM", category: "database", icon: "Binary" },
  { name: "Docker", category: "devops", icon: "Container" },
  { name: "Electron", category: "desktop", icon: "Monitor" },
  { name: "Smart APIs", category: "specialty", icon: "Zap" },
  { name: "Inteligência Artificial & Voz", category: "specialty", icon: "BrainCircuit" },
  { name: "Segurança da Informação", category: "specialty", icon: "Lock" },
  { name: "Infraestrutura de Redes", category: "specialty", icon: "Network" }
];

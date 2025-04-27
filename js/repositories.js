// Dados dos repositórios
const repositoriesData = [
  {
    "name": "julianostroschon",
    "description": "Config files for my GitHub profile.",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2025-04-26",
    "private": false,
    "url": "https://github.com/julianostroschon/julianostroschon",
    "stars": 2,
    "forks": 0
  },
  {
    "name": "issue-voter",
    "description": "Repositório issue-voter",
    "technologies": [
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-04-26",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "front-vite-quasar",
    "description": "Um template moderno para desenvolvimento frontend com Vue 3, Vite, TypeScript e Quasar Framework. Inclui roteamento baseado em arquivos, importação automática de componentes, gerenciamento de estado com Pinia e suporte a i18n.",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Quasar",
      "Sass",
      "Shell",
      "TypeScript",
      "Vite",
      "Vue.js",
      "i18n"
    ],
    "updated": "2025-04-25",
    "private": false,
    "url": "https://github.com/julianostroschon/front-vite-quasar",
    "stars": 1,
    "forks": 2
  },
  {
    "name": "volei-torneio",
    "description": "Repositório volei-torneio",
    "technologies": [
      "CSS",
      "JavaScript",
      "Shell",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-04-22",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "backup",
    "description": "Repositório backup",
    "technologies": [
      "Shell"
    ],
    "updated": "2025-04-22",
    "private": false,
    "url": "https://github.com/julianostroschon/backup",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "nuxtjs-graphql",
    "description": "Repositório nuxtjs-graphql",
    "technologies": [
      "CSS",
      "GraphQL",
      "JavaScript",
      "Shell",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-02-17",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "nuxt-base",
    "description": "Repositório nuxt-base",
    "technologies": [
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-02-17",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "wpp-api",
    "description": "Repositório wpp-api",
    "technologies": [
      "Docker",
      "JavaScript",
      "Procfile"
    ],
    "updated": "2024-12-07",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "sender",
    "description": "Repositório sender",
    "technologies": [
      "JavaScript",
      "TypeScript"
    ],
    "updated": "2024-11-12",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "front-default",
    "description": "Template frontend com configurações pré-definidas para desenvolvimento rápido de aplicações web modernas.",
    "technologies": [
      "CSS",
      "Frontend",
      "HTML",
      "JavaScript",
      "Sass",
      "Shell",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2024-10-26",
    "private": false,
    "url": "https://github.com/julianostroschon/front-default",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "monolito-base",
    "description": "Projeto monolítico demonstrando a integração do Quasar Framework com VueJS e Apollo GraphQL. Inclui frontend com Quasar e backend com Node.js e Apollo GraphQL.",
    "technologies": [
      "CSS",
      "GraphQL",
      "HTML",
      "JavaScript",
      "Node.js",
      "Quasar",
      "Sass",
      "Vue.js"
    ],
    "updated": "2024-10-11",
    "private": false,
    "url": "https://github.com/julianostroschon/monolito-base",
    "stars": 1,
    "forks": 1
  },
  {
    "name": "d1-scheduler",
    "description": "Repositório d1-scheduler",
    "technologies": [
      "JavaScript",
      "TypeScript"
    ],
    "updated": "2024-09-09",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "back-default",
    "description": "Template para desenvolvimento de APIs backend com TypeScript, seguindo boas práticas de arquitetura e padrões de projeto.",
    "technologies": [
      "API",
      "Node.js",
      "REST",
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-08-26",
    "private": false,
    "url": "https://github.com/julianostroschon/back-default",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "back-reservation",
    "description": "Repositório back-reservation",
    "technologies": [
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-07-01",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "environment",
    "description": "Repositório environment",
    "technologies": [],
    "updated": "2024-06-10",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "front-reservation",
    "description": "Repositório front-reservation",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Sass",
      "Vue.js"
    ],
    "updated": "2024-06-05",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "whatsapp-api-typescript",
    "description": "API para integração com WhatsApp desenvolvida em TypeScript. Permite enviar mensagens e obter IDs de chat através de endpoints RESTful com autenticação JWT.",
    "technologies": [
      "API",
      "Docker",
      "JWT",
      "JavaScript",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-05-24",
    "private": false,
    "url": "https://github.com/julianostroschon/whatsapp-api-typescript",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "nestjs-winter",
    "description": "Aplicação backend desenvolvida com NestJS, um framework progressivo para construir aplicações server-side eficientes e escaláveis.",
    "technologies": [
      "API",
      "JavaScript",
      "NestJS",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-05-14",
    "private": false,
    "url": "https://github.com/julianostroschon/nestjs-winter",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "hello-world-fastify",
    "description": "Exemplo de aplicação 'Hello World' utilizando Fastify, um framework web rápido e de baixo overhead para Node.js.",
    "technologies": [
      "Fastify",
      "JavaScript",
      "Node.js"
    ],
    "updated": "2024-04-29",
    "private": false,
    "url": "https://github.com/julianostroschon/hello-world-fastify",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "saturday",
    "description": "Repositório saturday",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-04-26",
    "private": false,
    "url": "https://github.com/julianostroschon/saturday",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "jarbas",
    "description": "Projeto de automação e assistente virtual utilizando tecnologias modernas de processamento de linguagem natural.",
    "technologies": [
      "Automação",
      "NLP",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-03-14",
    "private": false,
    "url": "https://github.com/julianostroschon/jarbas",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "winter-dev",
    "description": "Repositório winter-dev",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-02-24",
    "private": false,
    "url": "https://github.com/julianostroschon/winter-dev",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "bot-wpp",
    "description": "Repositório bot-wpp",
    "technologies": [
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-02-06",
    "private": false,
    "url": "https://github.com/julianostroschon/bot-wpp",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "back-type-graphql",
    "description": "Repositório back-type-graphql",
    "technologies": [
      "Docker",
      "GraphQL",
      "JavaScript",
      "Shell",
      "TypeScript"
    ],
    "updated": "2023-11-13",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "curso-go",
    "description": "Repositório com exemplos e exercícios do curso de Go, explorando os fundamentos da linguagem e padrões de desenvolvimento.",
    "technologies": [
      "Backend",
      "Go"
    ],
    "updated": "2023-11-09",
    "private": false,
    "url": "https://github.com/julianostroschon/curso-go",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "first-app",
    "description": "Primeira aplicação desenvolvida com TypeScript, demonstrando conceitos básicos e boas práticas.",
    "technologies": [
      "JavaScript",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2023-07-06",
    "private": false,
    "url": "https://github.com/julianostroschon/first-app",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "nuxt-project",
    "description": "Repositório nuxt-project",
    "technologies": [
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2023-04-28",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  },
  {
    "name": "vitesse",
    "description": "Template Vue 3 com Vite para iniciar projetos rapidamente, incluindo TypeScript, ESBuild e outras ferramentas modernas.",
    "technologies": [
      "CSS",
      "Docker",
      "HTML",
      "TypeScript",
      "Vite",
      "Vue.js"
    ],
    "updated": "2023-02-20",
    "private": false,
    "url": "https://github.com/julianostroschon/vitesse",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "landing-page",
    "description": "Repositório landing-page",
    "technologies": [
      "JavaScript",
      "Vue.js"
    ],
    "updated": "2022-11-11",
    "private": false,
    "url": "https://github.com/julianostroschon/landing-page",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "type-portifolio",
    "description": "Repositório type-portifolio",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Sass",
      "Vue.js"
    ],
    "updated": "2022-11-09",
    "private": false,
    "url": "https://github.com/julianostroschon/type-portifolio",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "application-standard",
    "description": "Repositório application-standard",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2022-05-19",
    "private": false,
    "url": "https://github.com/julianostroschon/application-standard",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "JS",
    "description": "Repositório JS",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2021-11-24",
    "private": true,
    "stars": "🔒",
    "forks": "🔒"
  }
];
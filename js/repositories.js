// Dados dos repositórios
const repositoriesData = [
  {
    "name": "julianostroschon",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2025-05-15",
    "private": false,
    "description": "Config files for my GitHub profile.",
    "url": "https://github.com/julianostroschon/julianostroschon",
    "stars": 2,
    "forks": 0
  },
  {
    "name": "issue-voter",
    "technologies": [
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-05-07",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "web-scraping-andrinho",
    "technologies": [
      "JavaScript"
    ],
    "updated": "2025-04-30",
    "private": false,
    "description": "Repositório web-scraping-andrinho",
    "url": "https://github.com/julianostroschon/web-scraping-andrinho",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "backup",
    "technologies": [
      "Shell"
    ],
    "updated": "2025-04-28",
    "private": false,
    "description": "Repositório backup",
    "url": "https://github.com/julianostroschon/backup",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "front-vite-quasar",
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
    "description": "Um template moderno para desenvolvimento frontend com Vue 3, Vite, TypeScript e Quasar Framework. Inclui roteamento baseado em arquivos, importação automática de componentes, gerenciamento de estado com Pinia e suporte a i18n.",
    "url": "https://github.com/julianostroschon/front-vite-quasar",
    "stars": 1,
    "forks": 2
  },
  {
    "name": "volei-torneio",
    "technologies": [
      "CSS",
      "JavaScript",
      "Shell",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-04-22",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "nuxtjs-graphql",
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
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "nuxt-base",
    "technologies": [
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2025-02-17",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "wpp-api",
    "technologies": [
      "Docker",
      "JavaScript",
      "Procfile"
    ],
    "updated": "2024-12-07",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "sender",
    "technologies": [
      "JavaScript",
      "TypeScript"
    ],
    "updated": "2024-11-12",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "front-default",
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
    "description": "Template frontend com configurações pré-definidas para desenvolvimento rápido de aplicações web modernas.",
    "url": "https://github.com/julianostroschon/front-default",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "monolito-base",
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
    "description": "Projeto monolítico demonstrando a integração do Quasar Framework com VueJS e Apollo GraphQL. Inclui frontend com Quasar e backend com Node.js e Apollo GraphQL.",
    "url": "https://github.com/julianostroschon/monolito-base",
    "stars": 1,
    "forks": 1
  },
  {
    "name": "d1-scheduler",
    "technologies": [
      "JavaScript",
      "TypeScript"
    ],
    "updated": "2024-09-09",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "back-default",
    "technologies": [
      "API",
      "Node.js",
      "REST",
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-08-26",
    "private": false,
    "description": "Template para desenvolvimento de APIs backend com TypeScript, seguindo boas práticas de arquitetura e padrões de projeto.",
    "url": "https://github.com/julianostroschon/back-default",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "back-reservation",
    "technologies": [
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-07-01",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "environment",
    "technologies": [],
    "updated": "2024-06-10",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "front-reservation",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Sass",
      "Vue.js"
    ],
    "updated": "2024-06-05",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "whatsapp-api-typescript",
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
    "description": "API para integração com WhatsApp desenvolvida em TypeScript. Permite enviar mensagens e obter IDs de chat através de endpoints RESTful com autenticação JWT.",
    "url": "https://github.com/julianostroschon/whatsapp-api-typescript",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "nestjs-winter",
    "technologies": [
      "API",
      "JavaScript",
      "NestJS",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-05-14",
    "private": false,
    "description": "Aplicação backend desenvolvida com NestJS, um framework progressivo para construir aplicações server-side eficientes e escaláveis.",
    "url": "https://github.com/julianostroschon/nestjs-winter",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "hello-world-fastify",
    "technologies": [
      "Fastify",
      "JavaScript",
      "Node.js"
    ],
    "updated": "2024-04-29",
    "private": false,
    "description": "Exemplo de aplicação 'Hello World' utilizando Fastify, um framework web rápido e de baixo overhead para Node.js.",
    "url": "https://github.com/julianostroschon/hello-world-fastify",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "saturday",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-04-26",
    "private": false,
    "description": "Repositório saturday",
    "url": "https://github.com/julianostroschon/saturday",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "jarbas",
    "technologies": [
      "Automação",
      "NLP",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-03-14",
    "private": false,
    "description": "Projeto de automação e assistente virtual utilizando tecnologias modernas de processamento de linguagem natural.",
    "url": "https://github.com/julianostroschon/jarbas",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "winter-dev",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-02-24",
    "private": false,
    "description": "Repositório winter-dev",
    "url": "https://github.com/julianostroschon/winter-dev",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "bot-wpp",
    "technologies": [
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-02-06",
    "private": false,
    "description": "Repositório bot-wpp",
    "url": "https://github.com/julianostroschon/bot-wpp",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "back-type-graphql",
    "technologies": [
      "Docker",
      "GraphQL",
      "JavaScript",
      "Shell",
      "TypeScript"
    ],
    "updated": "2023-11-13",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "curso-go",
    "technologies": [
      "Backend",
      "Go"
    ],
    "updated": "2023-11-09",
    "private": false,
    "description": "Repositório com exemplos e exercícios do curso de Go, explorando os fundamentos da linguagem e padrões de desenvolvimento.",
    "url": "https://github.com/julianostroschon/curso-go",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "first-app",
    "technologies": [
      "JavaScript",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2023-07-06",
    "private": false,
    "description": "Primeira aplicação desenvolvida com TypeScript, demonstrando conceitos básicos e boas práticas.",
    "url": "https://github.com/julianostroschon/first-app",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "nuxt-project",
    "technologies": [
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ],
    "updated": "2023-04-28",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  },
  {
    "name": "vitesse",
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
    "description": "Template Vue 3 com Vite para iniciar projetos rapidamente, incluindo TypeScript, ESBuild e outras ferramentas modernas.",
    "url": "https://github.com/julianostroschon/vitesse",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "landing-page",
    "technologies": [
      "JavaScript",
      "Vue.js"
    ],
    "updated": "2022-11-11",
    "private": false,
    "description": "Repositório landing-page",
    "url": "https://github.com/julianostroschon/landing-page",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "type-portifolio",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Sass",
      "Vue.js"
    ],
    "updated": "2022-11-09",
    "private": false,
    "description": "Repositório type-portifolio",
    "url": "https://github.com/julianostroschon/type-portifolio",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "application-standard",
    "technologies": [
      "TypeScript"
    ],
    "updated": "2022-05-19",
    "private": false,
    "description": "Repositório application-standard",
    "url": "https://github.com/julianostroschon/application-standard",
    "stars": 0,
    "forks": 1
  },
  {
    "name": "JS",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2021-11-24",
    "private": true,
    "description": "🔒 Repositório Privado",
    "stars": "🔒",
    "forks": "🔒",
    "url": null
  }
];
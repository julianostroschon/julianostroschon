// Dados dos repositórios
const repositoriesData = [
  {
    "name": "julianostroschon",
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2025-09-14",
    "private": false,
    "description": "Config files for my GitHub profile.",
    "url": "https://github.com/julianostroschon/julianostroschon",
    "stars": 2,
    "forks": 0
  },
  {
    "name": "api-typescript-messages",
    "technologies": [
      "API",
      "Docker",
      "Fastify",
      "JavaScript",
      "Shell",
      "TypeScript"
    ],
    "updated": "2025-09-12",
    "private": false,
    "description": "Repositório api-typescript-messages",
    "url": "https://github.com/julianostroschon/api-typescript-messages",
    "stars": 1,
    "forks": 0
  },
  {
    "name": "graphql-server",
    "technologies": [
      "GraphQL",
      "JavaScript",
      "Shell",
      "TypeScript"
    ],
    "updated": "2025-08-22",
    "private": false,
    "description": "Repositório graphql-server",
    "url": "https://github.com/julianostroschon/graphql-server",
    "stars": 0,
    "forks": 0
  },
  {
    "name": "vite-pinia-apollo",
    "technologies": [
      "CSS",
      "HTML",
      "TypeScript",
      "Vite",
      "Vue.js"
    ],
    "updated": "2025-08-21",
    "private": false,
    "description": "Repositório vite-pinia-apollo",
    "url": "https://github.com/julianostroschon/vite-pinia-apollo",
    "stars": 0,
    "forks": 0
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
    "forks": 1
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
  }
];
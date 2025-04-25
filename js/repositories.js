// Dados dos repositórios
const repositoriesData = [
  {
    "name": "julianostroschon",
    "description": "Config files for my GitHub profile.",
    "url": "https://github.com/julianostroschon/julianostroschon",
    "stars": 2,
    "forks": 0,
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript"
    ],
    "updated": "2025-04-25"
  },
  {
    "name": "backup",
    "description": "Repositório backup",
    "url": "https://github.com/julianostroschon/backup",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "Shell"
    ],
    "updated": "2025-04-22"
  },
  {
    "name": "front-default",
    "description": "Template frontend com configurações pré-definidas para desenvolvimento rápido de aplicações web modernas.",
    "url": "https://github.com/julianostroschon/front-default",
    "stars": 0,
    "forks": 1,
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
    "updated": "2024-10-26"
  },
  {
    "name": "monolito-base",
    "description": "Projeto monolítico demonstrando a integração do Quasar Framework com VueJS e Apollo GraphQL. Inclui frontend com Quasar e backend com Node.js e Apollo GraphQL.",
    "url": "https://github.com/julianostroschon/monolito-base",
    "stars": 1,
    "forks": 1,
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
    "updated": "2024-10-11"
  },
  {
    "name": "front-vite-quasar",
    "description": "Um template moderno para desenvolvimento frontend com Vue 3, Vite, TypeScript e Quasar Framework. Inclui roteamento baseado em arquivos, importação automática de componentes, gerenciamento de estado com Pinia e suporte a i18n.",
    "url": "https://github.com/julianostroschon/front-vite-quasar",
    "stars": 1,
    "forks": 2,
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
    "updated": "2024-09-19"
  },
  {
    "name": "back-default",
    "description": "Template para desenvolvimento de APIs backend com TypeScript, seguindo boas práticas de arquitetura e padrões de projeto.",
    "url": "https://github.com/julianostroschon/back-default",
    "stars": 0,
    "forks": 1,
    "technologies": [
      "API",
      "Node.js",
      "REST",
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-08-26"
  },
  {
    "name": "whatsapp-api-typescript",
    "description": "API para integração com WhatsApp desenvolvida em TypeScript. Permite enviar mensagens e obter IDs de chat através de endpoints RESTful com autenticação JWT.",
    "url": "https://github.com/julianostroschon/whatsapp-api-typescript",
    "stars": 1,
    "forks": 0,
    "technologies": [
      "API",
      "Docker",
      "JWT",
      "JavaScript",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-05-24"
  },
  {
    "name": "nestjs-winter",
    "description": "Aplicação backend desenvolvida com NestJS, um framework progressivo para construir aplicações server-side eficientes e escaláveis.",
    "url": "https://github.com/julianostroschon/nestjs-winter",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "API",
      "JavaScript",
      "NestJS",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-05-14"
  },
  {
    "name": "hello-world-fastify",
    "description": "Exemplo de aplicação 'Hello World' utilizando Fastify, um framework web rápido e de baixo overhead para Node.js.",
    "url": "https://github.com/julianostroschon/hello-world-fastify",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "Fastify",
      "JavaScript",
      "Node.js"
    ],
    "updated": "2024-04-29"
  },
  {
    "name": "saturday",
    "description": "Repositório saturday",
    "url": "https://github.com/julianostroschon/saturday",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-04-26"
  },
  {
    "name": "jarbas",
    "description": "Projeto de automação e assistente virtual utilizando tecnologias modernas de processamento de linguagem natural.",
    "url": "https://github.com/julianostroschon/jarbas",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "Automação",
      "NLP",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2024-03-14"
  },
  {
    "name": "winter-dev",
    "description": "Repositório winter-dev",
    "url": "https://github.com/julianostroschon/winter-dev",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "TypeScript"
    ],
    "updated": "2024-02-24"
  },
  {
    "name": "bot-wpp",
    "description": "Repositório bot-wpp",
    "url": "https://github.com/julianostroschon/bot-wpp",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "Shell",
      "TypeScript"
    ],
    "updated": "2024-02-06"
  },
  {
    "name": "curso-go",
    "description": "Repositório com exemplos e exercícios do curso de Go, explorando os fundamentos da linguagem e padrões de desenvolvimento.",
    "url": "https://github.com/julianostroschon/curso-go",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "Backend",
      "Go"
    ],
    "updated": "2023-11-09"
  },
  {
    "name": "first-app",
    "description": "Primeira aplicação desenvolvida com TypeScript, demonstrando conceitos básicos e boas práticas.",
    "url": "https://github.com/julianostroschon/first-app",
    "stars": 1,
    "forks": 0,
    "technologies": [
      "JavaScript",
      "Node.js",
      "TypeScript"
    ],
    "updated": "2023-07-06"
  },
  {
    "name": "vitesse",
    "description": "Template Vue 3 com Vite para iniciar projetos rapidamente, incluindo TypeScript, ESBuild e outras ferramentas modernas.",
    "url": "https://github.com/julianostroschon/vitesse",
    "stars": 1,
    "forks": 0,
    "technologies": [
      "CSS",
      "Docker",
      "HTML",
      "TypeScript",
      "Vite",
      "Vue.js"
    ],
    "updated": "2023-02-20"
  },
  {
    "name": "landing-page",
    "description": "Repositório landing-page",
    "url": "https://github.com/julianostroschon/landing-page",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "JavaScript",
      "Vue.js"
    ],
    "updated": "2022-11-11"
  },
  {
    "name": "type-portifolio",
    "description": "Repositório type-portifolio",
    "url": "https://github.com/julianostroschon/type-portifolio",
    "stars": 0,
    "forks": 0,
    "technologies": [
      "CSS",
      "HTML",
      "JavaScript",
      "Sass",
      "Vue.js"
    ],
    "updated": "2022-11-09"
  },
  {
    "name": "application-standard",
    "description": "Repositório application-standard",
    "url": "https://github.com/julianostroschon/application-standard",
    "stars": 0,
    "forks": 1,
    "technologies": [
      "TypeScript"
    ],
    "updated": "2022-05-19"
  }
];
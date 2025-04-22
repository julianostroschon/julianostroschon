const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

// Configuração
const GITHUB_USERNAME = 'julianostroschon';
const REPOSITORIES_FILE_PATH = path.join(__dirname, '../../js/repositories.js');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Mapeamento de linguagens para tecnologias
const languageToTechMap = {
  'JavaScript': ['JavaScript'],
  'TypeScript': ['TypeScript'],
  'Vue': ['Vue.js'],
  'HTML': ['HTML'],
  'CSS': ['CSS'],
  'SCSS': ['SCSS', 'CSS'],
  'Sass': ['Sass', 'CSS'],
  'Go': ['Go'],
  'Shell': ['Shell'],
  'Dockerfile': ['Docker'],
};

// Mapeamento de tópicos para tecnologias
const topicToTechMap = {
  'vuejs': 'Vue.js',
  'vue': 'Vue.js',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'nodejs': 'Node.js',
  'node-js': 'Node.js',
  'graphql': 'GraphQL',
  'rest-api': 'REST',
  'api': 'API',
  'docker': 'Docker',
  'vite': 'Vite',
  'quasar': 'Quasar',
  'quasar-framework': 'Quasar',
  'nestjs': 'NestJS',
  'i18n': 'i18n',
  'fastify': 'Fastify',
};

// Detectar tecnologias com base no nome do repositório
function detectTechFromName(name) {
  const techMap = {
    'vite': 'Vite',
    'quasar': 'Quasar',
    'vue': 'Vue.js',
    'react': 'React',
    'angular': 'Angular',
    'node': 'Node.js',
    'nest': 'NestJS',
    'fastify': 'Fastify',
    'express': 'Express',
    'graphql': 'GraphQL',
    'typescript': 'TypeScript',
    'ts': 'TypeScript',
    'js': 'JavaScript',
    'go': 'Go',
    'docker': 'Docker',
  };
  
  const detectedTech = [];
  const lowerName = name.toLowerCase();
  
  Object.entries(techMap).forEach(([key, tech]) => {
    if (lowerName.includes(key)) {
      detectedTech.push(tech);
    }
  });
  
  return detectedTech;
}

// Função principal
async function main() {
  try {
    console.log('Iniciando atualização dos dados dos repositórios...');
    
    // Inicializar Octokit
    const octokit = new Octokit({
      auth: GITHUB_TOKEN
    });
    
    // Buscar todos os repositórios do usuário
    console.log(`Buscando repositórios para o usuário: ${GITHUB_USERNAME}`);
    const { data: repos } = await octokit.repos.listForUser({
      username: GITHUB_USERNAME,
      sort: 'updated',
      per_page: 100
    });
    
    console.log(`Encontrados ${repos.length} repositórios.`);
    
    // Processar cada repositório
    const processedRepos = await Promise.all(repos.map(async (repo) => {
      if (repo.fork) {
        console.log(`Ignorando fork: ${repo.name}`);
        return null; // Ignorar forks
      }
      
      console.log(`Processando repositório: ${repo.name}`);
      
      // Buscar linguagens do repositório
      const { data: languages } = await octokit.repos.listLanguages({
        owner: GITHUB_USERNAME,
        repo: repo.name
      });
      
      // Buscar tópicos do repositório
      const { data: topicsData } = await octokit.repos.getAllTopics({
        owner: GITHUB_USERNAME,
        repo: repo.name
      });
      
      // Detectar tecnologias
      const technologies = new Set();
      
      // Adicionar tecnologias com base nas linguagens
      Object.keys(languages).forEach(lang => {
        const techs = languageToTechMap[lang] || [lang];
        techs.forEach(tech => technologies.add(tech));
      });
      
      // Adicionar tecnologias com base nos tópicos
      topicsData.names.forEach(topic => {
        const tech = topicToTechMap[topic];
        if (tech) technologies.add(tech);
      });
      
      // Adicionar tecnologias com base no nome
      detectTechFromName(repo.name).forEach(tech => technologies.add(tech));
      
      // Converter Set para Array e ordenar
      const techArray = Array.from(technologies).sort();
      
      return {
        name: repo.name,
        description: repo.description || `Repositório ${repo.name}`,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        technologies: techArray,
        updated: repo.updated_at.split('T')[0]
      };
    }));
    
    // Filtrar repositórios nulos (forks)
    const filteredRepos = processedRepos.filter(repo => repo !== null);
    
    // Ordenar por data de atualização (mais recente primeiro)
    filteredRepos.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    
    // Ler o arquivo atual para preservar descrições personalizadas
    let currentReposData = [];
    try {
      const fileContent = fs.readFileSync(REPOSITORIES_FILE_PATH, 'utf8');
      const match = fileContent.match(/const repositoriesData = (\[[\s\S]*?\]);/);
      if (match && match[1]) {
        // Avaliar o array de repositórios do arquivo
        currentReposData = eval(match[1]);
      }
    } catch (error) {
      console.log('Arquivo de repositórios não encontrado ou inválido. Criando novo arquivo.');
    }
    
    // Mesclar dados atuais com novos dados
    const mergedRepos = filteredRepos.map(newRepo => {
      const existingRepo = currentReposData.find(r => r.name === newRepo.name);
      if (existingRepo) {
        // Preservar descrição personalizada se existir
        return {
          ...newRepo,
          description: existingRepo.description || newRepo.description,
          // Mesclar tecnologias
          technologies: Array.from(new Set([
            ...newRepo.technologies,
            ...(existingRepo.technologies || [])
          ])).sort()
        };
      }
      return newRepo;
    });
    
    // Gerar conteúdo do arquivo
    const fileContent = `// Dados dos repositórios
const repositoriesData = ${JSON.stringify(mergedRepos, null, 2)};`;
    
    // Escrever no arquivo
    fs.writeFileSync(REPOSITORIES_FILE_PATH, fileContent);
    
    console.log('Dados dos repositórios atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar dados dos repositórios:', error);
    process.exit(1);
  }
}

main();

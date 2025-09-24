// Aplicação Vue.js
const techColorVars = {
  'JavaScript': '--color-javascript',
  'TypeScript': '--color-typescript',
  'Vue.js': '--color-vuejs',
  'React': '--color-react',
  'Angular': '--color-angular',
  'Node.js': '--color-nodejs',
  'Python': '--color-python',
  'Go': '--color-go',
  'HTML': '--color-html',
  'CSS': '--color-css',
  'Sass': '--color-sass',
  'Docker': '--color-docker',
  'GraphQL': '--color-graphql',
  'Quasar': '--color-quasar',
  'Vite': '--color-vite',
  'API': '--color-api',
  'HCL': '--color-hcl',
  'Packer': '--color-packer',
  'Terraform': '--color-terraform',
  'Ansible': '--color-ansible',
  'NestJS': '--color-nestjs',
  'REST': '--color-rest',
  'YAML': '--color-yaml',
  'JSON': '--color-json',
  // Adicione mais se quiser
}
const app = Vue.createApp({
  // Mapeamento de cores para tecnologias

  data() {
    return {
      techColorVars,
      darkMode: false,
      repositories: [],
      searchQuery: '',
      sortOption: 'updated',
      currentTechFilter: '',
      technologies: [
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'TypeScript', icon: 'fab fa-js-square' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'GraphQL', icon: 'fas fa-project-diagram' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Go', icon: 'fas fa-code' },
        { name: 'API', icon: 'fas fa-server' },
        { name: 'REST', icon: 'fas fa-exchange-alt' },
        { name: 'Quasar', icon: 'fas fa-layer-group' },
        { name: 'Vite', icon: 'fas fa-bolt' },
        { name: 'NestJS', icon: 'fas fa-feather' },
        { name: 'HCL', icon: 'fas fa-cogs' },
        { name: 'Packer', icon: 'fas fa-box-open' },
        { name: 'Terraform', icon: 'fas fa-cloud-upload-alt' },
        { name: 'Ansible', icon: 'fas fa-stream' },
        { name: 'YAML', icon: 'fas fa-file-code' },
        { name: 'JSON', icon: 'fas fa-bracket-curly' }
      ]
    }
  },

  computed: {
    filteredRepositories() {
      let result = [...this.repositories]

      // Filtrar por tecnologia
      if (this.currentTechFilter) {
        result = result.filter(repo =>
          repo.technologies.includes(this.currentTechFilter)
        )
      }

      // Filtrar por busca
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(repo =>
          repo.name.toLowerCase().includes(query) ||
          (repo.description && repo.description.toLowerCase().includes(query))
        )
      }

      // Ordenar
      result.sort((a, b) => {
        if (this.sortOption === 'name') {
          return a.name.localeCompare(b.name)
        } else if (this.sortOption === 'stars') {
          return b.stars - a.stars
        } else if (this.sortOption === 'updated') {
          return new Date(b.updated) - new Date(a.updated)
        }
        return 0
      })

      return result
    },

    // Verifica se existem repositórios privados
    hasPrivateRepos() {
      return this.repositories.some(repo => repo.private)
    },

    // Contagem de repositórios privados
    privateReposCount() {
      return this.repositories.filter(repo => repo.private).length
    },

    // Contagem de repositórios públicos
    publicReposCount() {
      return this.repositories.filter(repo => !repo.private).length
    }
  },

  methods: {
    techColorStyle(techName) {
      const cssVar = this.techColorVars[techName]
      if (cssVar) {
        return { color: `var(${cssVar})` }
      }
      return {}
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode

      if (this.darkMode) {
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
      }

      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false')
    },

    filterByTech(tech) {
      if (this.currentTechFilter === tech) {
        this.currentTechFilter = ''
      } else {
        this.currentTechFilter = tech
      }
    },

    resetFilters() {
      this.searchQuery = ''
      this.currentTechFilter = ''
    },

    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('pt-BR', options)
    },

    // Verifica se a descrição é longa o suficiente para ser truncada
    isDescriptionLong(repoName) {
      // Verificar se o elemento existe no DOM
      const descElement = document.getElementById(`desc-${repoName}`)
      if (!descElement) return false

      // Comparar a altura do conteúdo com a altura visível
      return descElement.scrollHeight > 72 // 4.5em em pixels (aproximadamente)
    },

    // Verifica o tamanho de todas as descrições
    checkDescriptionLengths() {
      this.repositories.forEach(repo => {
        const descElement = document.getElementById(`desc-${repo.name}`)
        if (descElement) {
          // Armazenar a altura original para uso posterior
          repo._scrollHeight = descElement.scrollHeight
        }
      })
    },

    // Alterna entre descrição expandida e contraída
    toggleDescription(repo, e) {
      // Impedir a propagação do evento para evitar conflito com o clique no card
      if (e) e.stopPropagation()

      // Alternar o estado
      repo.expanded = !repo.expanded

      // Aplicar a altura apropriada
      this.$nextTick(() => {
        const descElement = document.getElementById(`desc-${repo.name}`)
        if (descElement) {
          if (repo.expanded) {
            // Quando expandido, definir a altura para acomodar todo o conteúdo
            descElement.style.maxHeight = `${repo._scrollHeight}px`
          } else {
            // Quando contraído, voltar para o valor padrão do CSS
            descElement.style.maxHeight = ''
          }
        }
      })
    },

    highlightPrivateRepo(event) {
      // Obter o elemento do card
      const card = event.currentTarget

      // Adicionar a classe para destacar
      card.classList.add('highlight-private')

      // Mostrar uma mensagem de alerta
      const privateMessage = document.createElement('div')
      privateMessage.className = 'private-message'
      privateMessage.innerHTML = '<i class="fas fa-lock"></i> Este é um repositório privado'
      privateMessage.style.position = 'fixed'
      privateMessage.style.top = '20px'
      privateMessage.style.left = '50%'
      privateMessage.style.transform = 'translateX(-50%)'
      privateMessage.style.backgroundColor = 'var(--primary-color)'
      privateMessage.style.color = 'white'
      privateMessage.style.padding = '10px 20px'
      privateMessage.style.borderRadius = '4px'
      privateMessage.style.boxShadow = 'var(--shadow-md)'
      privateMessage.style.zIndex = '1000'
      privateMessage.style.display = 'flex'
      privateMessage.style.alignItems = 'center'
      privateMessage.style.gap = '8px'
      privateMessage.style.fontSize = '14px'
      privateMessage.style.fontWeight = 'bold'
      privateMessage.style.opacity = '0'
      privateMessage.style.transition = 'opacity 0.3s ease'

      document.body.appendChild(privateMessage)

      // Animar a entrada da mensagem
      setTimeout(() => {
        privateMessage.style.opacity = '1'
      }, 10)

      // Remover a mensagem após 3 segundos
      setTimeout(() => {
        privateMessage.style.opacity = '0'
        setTimeout(() => {
          document.body.removeChild(privateMessage)
        }, 300)
      }, 3000)

      // Remover a classe de destaque após a animação
      setTimeout(() => {
        card.classList.remove('highlight-private')
      }, 2000)
    }
  },

  mounted() {
    // Verificar preferência salva no localStorage
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') {
      this.darkMode = true
      document.documentElement.classList.add('dark-mode')
    } else if (savedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true
      document.documentElement.classList.add('dark-mode')
    }

    // Carregar repositórios e adicionar propriedade expanded
    this.repositories = repositoriesData.map(repo => ({
      ...repo,
      expanded: false // Inicialmente, todas as descrições estão contraídas
    }))

    // Verificar o tamanho das descrições após a renderização
    this.$nextTick(() => {
      this.checkDescriptionLengths()
    })
  },

  updated() {
    // Verificar novamente quando os dados são atualizados
    this.$nextTick(() => {
      this.checkDescriptionLengths()
    })
  }
})

app.mount('#app')

// Aplicação Vue.js
const app = Vue.createApp({
  data() {
    return {
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
        { name: 'NestJS', icon: 'fas fa-feather' }
      ]
    };
  },

  computed: {
    filteredRepositories() {
      let result = [...this.repositories];

      // Filtrar por tecnologia
      if (this.currentTechFilter) {
        result = result.filter(repo =>
          repo.technologies.includes(this.currentTechFilter)
        );
      }

      // Filtrar por busca
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(repo =>
          repo.name.toLowerCase().includes(query) ||
          (repo.description && repo.description.toLowerCase().includes(query))
        );
      }

      // Ordenar
      result.sort((a, b) => {
        if (this.sortOption === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortOption === 'stars') {
          return b.stars - a.stars;
        } else if (this.sortOption === 'updated') {
          return new Date(b.updated) - new Date(a.updated);
        }
        return 0;
      });

      return result;
    }
  },

  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }

      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
    },

    filterByTech(tech) {
      if (this.currentTechFilter === tech) {
        this.currentTechFilter = '';
      } else {
        this.currentTechFilter = tech;
      }
    },

    resetFilters() {
      this.searchQuery = '';
      this.currentTechFilter = '';
    },

    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
  },

  mounted() {
    // Verificar preferência salva no localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.darkMode = true;
      document.documentElement.classList.add('dark-mode');
    } else if (savedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
      document.documentElement.classList.add('dark-mode');
    }

    // Carregar repositórios
    this.repositories = repositoriesData;
  }
});

app.mount('#app');

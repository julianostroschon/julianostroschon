// Aplicação Vue.js
const { createApp, ref, computed, onMounted } = Vue;

const app = createApp({
  setup() {
    // Estado
    const repositories = ref([]);
    const searchQuery = ref('');
    const sortOption = ref('updated');
    const currentTechFilter = ref('');
    const darkMode = ref(false);

    // Lista de tecnologias
    const technologies = ref([
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
    ]);

    // Repositórios filtrados
    const filteredRepositories = computed(() => {
      let result = [...repositories.value];

      // Filtrar por tecnologia
      if (currentTechFilter.value) {
        result = result.filter(repo =>
          repo.technologies.includes(currentTechFilter.value)
        );
      }

      // Filtrar por busca
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(repo =>
          repo.name.toLowerCase().includes(query) ||
          (repo.description && repo.description.toLowerCase().includes(query))
        );
      }

      // Ordenar
      result.sort((a, b) => {
        if (sortOption.value === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortOption.value === 'stars') {
          return b.stars - a.stars;
        } else if (sortOption.value === 'updated') {
          return new Date(b.updated) - new Date(a.updated);
        }
        return 0;
      });

      return result;
    });

    // Métodos
    const filterByTech = (tech) => {
      if (currentTechFilter.value === tech) {
        currentTechFilter.value = ''; // Limpar filtro se clicar na mesma tecnologia
      } else {
        currentTechFilter.value = tech;
      }
    };

    const resetFilters = () => {
      searchQuery.value = '';
      currentTechFilter.value = '';
    };

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    // Função para aplicar o dark mode
    const applyDarkMode = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    };

    // Observar mudanças no darkMode
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      applyDarkMode(darkMode.value);
      // Salvar preferência no localStorage
      localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false');
    };

    // Carregar dados
    onMounted(() => {
      // Verificar preferência salva no localStorage
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
        darkMode.value = true;
      } else if (savedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver preferência salva, verificar preferência do sistema
        darkMode.value = true;
      }

      // Aplicar dark mode
      applyDarkMode(darkMode.value);

      // Carregar repositórios
      repositories.value = repositoriesData;
    });

    return {
      repositories,
      searchQuery,
      sortOption,
      currentTechFilter,
      darkMode,
      technologies,
      filteredRepositories,
      filterByTech,
      resetFilters,
      formatDate,
      toggleDarkMode
    };
  }
});

app.mount('#app');

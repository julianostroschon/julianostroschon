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
    
    // Carregar dados
    onMounted(() => {
      // Verificar preferência de tema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode.value = true;
      }
      
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
      formatDate
    };
  }
});

app.mount('#app');

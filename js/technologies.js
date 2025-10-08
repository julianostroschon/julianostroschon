// Shared technologies and colors used by index.html (Vue app) and cv.html
window.TECH_COLOR_VARS = {
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'Vue.js': '#42b883',
  'React': '#61dafb',
  'Angular': '#dd0031',
  'Node.js': '#43853d',
  'Python': '#3776ab',
  'Go': '#00add8',
  'HTML': '#e34f26',
  'CSS': '#1572b6',
  'Sass': '#cc6699',
  'Docker': '#2496ed',
  'GraphQL': '#e535ab',
  'Quasar': '#1976d2',
  'Vite': '#646cff',
  'API': '#6b7280',
  'HCL': '#6f42c1',
  'Packer': '#4a5568',
  'Terraform': '#623ce4',
  'Ansible': '#ee0000',
  'NestJS': '#e0234e',
  'REST': '#0ea5a4',
  'YAML': '#0891b2',
  'JSON': '#f97316',
  'Shell': '#89b0b0',
  'Fastify': '#20232a',
  'Frontend': '#8b5cf6',
  'Backend': '#0ea5a4',
  'Automação': '#10b981',
  'NLP': '#ef4444',
  'Procfile': '#111827',
  'i18n': '#f59e0b'
}

// Keep a single source of truth for the list of technologies used on the site
window.TECHNOLOGIES = [
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

// Expose a small helper to pick readable text color based on background
window.getContrastColor = function (hex) {
  if (!hex) return '#000'
  // strip # if present
  const c = hex.replace('#', '')
  const r = parseInt(c.substr(0, 2), 16)
  const g = parseInt(c.substr(2, 2), 16)
  const b = parseInt(c.substr(4, 2), 16)
  // luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? '#000' : '#fff'
}

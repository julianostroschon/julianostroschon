// Populate cv.html expertise pills from the shared TECHNOLOGIES list
(function () {
  function createPill(tech) {
    const span = document.createElement('span')
    span.className = 'pill'
    span.textContent = tech.name

    const color = (window.TECH_COLOR_VARS && window.TECH_COLOR_VARS[tech.name]) || null
    if (color) {
      span.style.backgroundColor = color
      span.style.color = window.getContrastColor(color)
    }

    return span
  }

  function populate() {
    const container = document.querySelector('.pills')
    if (!container) return

    // Clear any existing content
    container.innerHTML = ''

    const list = window.TECHNOLOGIES || []

    // Only include unique names (in case of duplicates)
    const seen = new Set()
    list.forEach(t => {
      if (!t || !t.name) return
      if (seen.has(t.name)) return
      seen.add(t.name)
      const pill = createPill(t)
      container.appendChild(pill)
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate)
  } else {
    populate()
  }
})()

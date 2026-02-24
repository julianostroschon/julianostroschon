(function () {
  const versionSelector = document.getElementById('cv-version');
  const languageSelector = document.getElementById('language-selector');
  const contentEl = document.getElementById('cv-content');
  const downloadButton = document.getElementById('download-pdf');
  const cvDocument = document.querySelector('.container');

  const markdownConverter = new showdown.Converter();

  const i18n = {
    pt: {
      subtitle: 'Senior Software Engineer • Platform Engineer • DevOps • Tech Lead',
      download: 'Baixar PDF',
      contact: 'Contato',
      location: 'Local',
      expertise: 'Expertise',
      title: 'Juliano Stroschon — Currículo'
    },
    en: {
      subtitle: 'Senior Software Engineer • Platform Engineer • DevOps • Tech Lead',
      download: 'Download PDF',
      contact: 'Contact',
      location: 'Location',
      expertise: 'Expertise',
      title: 'Juliano Stroschon — Resume'
    }
  };

  function translate(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = i18n[lang].title;
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
  }

  async function loadCvVersion(version, lang) {
    if (!contentEl) return;

    try {
      const response = await fetch(`cv/${lang}/${version}.md`);
      if (!response.ok) {
        throw new Error(`Could not load resume for ${version} in ${lang}`);
      }
      const markdown = await response.text();
      const html = markdownConverter.makeHtml(markdown);
      contentEl.innerHTML = html;
    } catch (error) {
      console.error(error);
      contentEl.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }

  function downloadPdf() {
    const version = versionSelector.value;
    const lang = languageSelector.value;
    const opt = {
      margin:       0,
      filename:     `resume-juliano-stroschon-${version}-${lang}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(cvDocument).set(opt).save();
  }

  function updateCv() {
    const version = versionSelector.value;
    const lang = languageSelector.value;
    translate(lang);
    loadCvVersion(version, lang);
  }

  versionSelector.addEventListener('change', updateCv);
  languageSelector.addEventListener('change', updateCv);
  downloadButton.addEventListener('click', downloadPdf);

  // Initial load
  updateCv();
})();

(function () {
  const versionSelector = document.getElementById('cv-version');
  const contentEl = document.getElementById('cv-content');
  const downloadButton = document.getElementById('download-pdf');
  const cvDocument = document.querySelector('.container');

  const markdownConverter = new showdown.Converter();

  async function loadCvVersion(version) {
    if (!contentEl) return;

    try {
      const response = await fetch(`cv/pt/${version}.md`);
      if (!response.ok) {
        throw new Error(`Não foi possível carregar o currículo para ${version}`);
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
    const opt = {
      margin:       0,
      filename:     `curriculo-juliano-stroschon-${version}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(cvDocument).set(opt).save();
  }

  versionSelector.addEventListener('change', (e) => {
    loadCvVersion(e.target.value);
  });

  downloadButton.addEventListener('click', downloadPdf);

  // Load initial version
  loadCvVersion(versionSelector.value);
})();

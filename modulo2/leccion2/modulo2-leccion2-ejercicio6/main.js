var namel="María"
var presentation = `Hola ${namel}. Encantada de conocerte.`;
var htmlToShow = `<p>
${presentation}
  
</p>`;

var mainContent = document.getElementById('content');
mainContent.innerHTML = htmlToShow;
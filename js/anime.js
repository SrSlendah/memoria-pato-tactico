function abrirOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = '';
    document.body.classList.add('scroll-blocked');
  }
}

function cerrarOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('scroll-blocked');
  }
}

function showSection(sectionNumber) {
    const totalSections = 5; // Actualiza esto con el número total de secciones
    
    for (let i = 1; i <= totalSections; i++) {
      const section = document.getElementById('sec' + i);
      const button = document.getElementById('sec' + i + '-btn');
      
      section.style.display = i === sectionNumber ? '' : 'none';
      button.style.backgroundColor = i === sectionNumber ? '#4b2966' : '#6f3c96';
      button.style.borderColor = i === sectionNumber ? '#311a42' : '#4b2866';
      button.style.color = i === sectionNumber ? '#9e9e9e' : '#fff';
    }
  }
    
    function showSec1() {
      showSection(1);
    }
    
    function showSec2() {
      showSection(2);
    }
    
    function showSec3() {
      showSection(3);
    }
    
    function showSec4() {
      showSection(4);
    }
    
    function showSec5() {
      showSection(5);
    }

// Gestion de Overlay

function abrirOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = '';
    document.body.classList.add('scroll-blocked');
  }
  console.log("[Overlay] Se ha pulsado el botón de mas información, Se ha abiarto el overlay ov" + overlayNumber)
}

function cerrarOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('scroll-blocked');
  }
  console.log("[Overlay] Se ha pulsado el boton de cerrar overlay, overlay cerrado")
}

function cerrarOVs() {
  var overlayNumber = 1;
  var overlay = document.getElementById('ov' + overlayNumber);

  while (overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('scroll-blocked');
    overlayNumber++;
    overlay = document.getElementById('ov' + overlayNumber);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    console.log("[Overlay] Se ha pulsado la tecla escape, overlay cerrado")
    cerrarOVs();
  }
});

// Cambiar entre secciones

function showSection(sectionNumber) {
    const totalSections = 5;
    
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

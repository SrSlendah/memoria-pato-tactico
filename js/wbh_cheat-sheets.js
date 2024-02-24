function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para mostrar u ocultar el menú de navegación
function toggleNavMenu() {
    var navMenu = document.getElementById('nav-menu');
    var buttonsContainer = document.querySelector('.secciones');
    var buttonsRect = buttonsContainer.getBoundingClientRect();

    if (buttonsRect.bottom <= 0) {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
}

// Escuchar el evento scroll para mostrar u ocultar el menú de navegación
window.addEventListener('scroll', toggleNavMenu);

// Facilitar misiones

function filterTables() {
  var selectedArma = document.getElementById('arma').value;
  var selectedFiltro = document.getElementById('filtro').value;

  var tables = document.querySelectorAll('table[data-tags]');
  tables.forEach(function(table) {
      var tags = table.getAttribute('data-tags').split(',');
      var showTable = true;

      if (selectedArma !== '' && tags.indexOf(selectedArma) === -1) {
          showTable = false;
      }

      if (selectedFiltro !== '' && tags.indexOf(selectedFiltro) === -1) {
          showTable = false;
      }

      if (showTable) {
          table.style.display = 'table';
      } else {
          table.style.display = 'none';
      }
  });
}

filterTables();
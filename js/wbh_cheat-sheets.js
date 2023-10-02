
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

// Llamar a filterTables() inicialmente para mostrar las tablas basadas en los valores iniciales de los select.
filterTables();
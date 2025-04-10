document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div[data-tags]');
    divs.forEach(function(div) {
        var tags = div.getAttribute('data-tags').split(',');
        if (tags.indexOf('se-conocen-valhalla') !== -1) {
            div.style.display = 'none';
        }
        if (tags.indexOf('se-conocen-asgard') !== -1) {
            div.style.display = 'none';
        }
    });
});

function filtroLeyendas() {
    var selectedArma = document.getElementById('arma').value;
    var selectedFiltro = document.getElementById('filtro').value;

    var divs = document.querySelectorAll('div[data-tags]');
    divs.forEach(function(div) {
        var tags = div.getAttribute('data-tags').split(',');
        var showDiv = true;

        if (tags.indexOf('se-conocen-valhalla') !== -1) {
            if (selectedArma !== 'se-conocen-valhalla' && selectedFiltro !== 'se-conocen-valhalla') {
                showDiv = false;
            }
        }
        
        if (tags.indexOf('se-conocen-asgard') !== -1) {
            if (selectedArma !== 'se-conocen-asgard' && selectedFiltro !== 'se-conocen-asgard') {
                showDiv = false;
            }
        }

        if (selectedArma !== '' && tags.indexOf(selectedArma) === -1) {
            showDiv = false;
        }

        if (selectedFiltro !== '' && tags.indexOf(selectedFiltro) === -1) {
            showDiv = false;
        }

        if (showDiv) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

filtroLeyendas();

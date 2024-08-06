const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Arcane', url: '../lista-peliculas-series/arcane' },
    { resultado: "Death Note: Live Action", url: '../lista-peliculas-series/death-note' },
    { resultado: 'Dos "Rubias" de Pelo en Pecho', url: '../lista-peliculas-series/dos-rubias-de-pelo-en-pecho' },
    { resultado: 'El Hoyo', url: '../lista-peliculas-series/el-hoyo' },
    { resultado: "Fallout", url: '../lista-peliculas-series/fallout' },
    { resultado: "Five Nights at Freddy's", url: '../lista-peliculas-series/five-nights-at-freddys' },
    { resultado: 'Harry Potter', url: '../lista-peliculas-series/harry-potter' },
    { resultado: 'Jurassic Park', url: '../lista-peliculas-series/jurassic-park' },
    { resultado: 'La Monja', url: '../lista-peliculas-series/la-monja' },
    { resultado: 'One Piece', url: '../lista-peliculas-series/one-piece' },
    { resultado: 'Rick & Morty', url: '../lista-peliculas-series/rick-morty' },
    { resultado: "Scary Movie", url: '../lista-peliculas-series/scary-movie' },
    { resultado: 'Slenderman', url: '../lista-peliculas-series/slenderman' },
    { resultado: 'Squid Game', url: '../lista-peliculas-series/squid-game' },
    { resultado: 'Stranger Things', url: '../lista-peliculas-series/stranger-things' },
    { resultado: 'The 8 Show', url: '../lista-peliculas-series/the-8-show' },
    { resultado: 'Viernes 13', url: '../lista-peliculas-series/viernes13' },
  ];

  query = removeAccents(query.toLowerCase());

  return resultadosConURLs.filter(item => removeAccents(item.resultado.toLowerCase()).includes(query));
}

searchInput.addEventListener('input', function() {
  const searchQuery = this.value;
  autocompleteList.innerHTML = '';

  if (searchQuery.length >= 2) {
    const results = obtenerResultadosConURLs(searchQuery);

    if (results.length > 0) {
      autocompleteList.style.display = 'block';

      const getScore = (result, query) => {
        const resultLower = result.resultado.toLowerCase();
        query = query.toLowerCase();

        if (resultLower.startsWith(query)) {
          return 2;
        } else if (resultLower.includes(query)) {
          return 1;
        } else {
          return 0;
        }
      };

      results.sort((a, b) => getScore(b, searchQuery) - getScore(a, searchQuery));

      results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.resultado;
        autocompleteList.appendChild(listItem);
      });
    } else {
      autocompleteList.style.display = 'none';
    }
  } else {
    autocompleteList.style.display = 'none';
  }
});

autocompleteList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const clickedResult = event.target.textContent;
    const resultObject = resultadosConURLs.find(item => item.resultado.toLowerCase() === clickedResult.toLowerCase());

    if (resultObject) {
      window.location.href = resultObject.url;
    }
  }
});

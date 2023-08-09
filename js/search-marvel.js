const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Iron Man', url: '../lista-marvel/ironman' },
    { resultado: "Iron Man 2", url: '../lista-marvel/ironman2' },
    { resultado: 'Thor', url: '../lista-marvel/thor' },
    { resultado: 'Capitán América', url: '../lista-marvel/capitanamerica' },
    { resultado: 'The Avengers', url: '../lista-marvel/avengers' },
    { resultado: "Iron Man 3", url: '../lista-marvel/ironman3' },
    { resultado: 'Thor: The Dark World', url: '../lista-marvel/thorthedarkworld' },
    { resultado: 'Capitán América y el Soldado del Invierno', url: '../lista-marvel/cap-am-winter' },
    { resultado: 'Guardianes de la Galaxia', url: '../lista-marvel/guardianesdelagalaxia' },
    { resultado: "Avengers: La Era de Ultron", url: '../lista-marvel/avengerseradeultron' },
    { resultado: 'Ant-Man', url: '../lista-marvel/antman' },
    { resultado: 'Capitán América: Civil War', url: '../lista-marvel/cap-am-civilwar' },
    { resultado: 'Doctor Strange', url: '../lista-marvel/doctor-strange' },
    { resultado: "Guardianes de la Galaxia Vol.2", url: '../lista-marvel/guardianesdelagalaxia2' },
    { resultado: 'Thor: Ragnarok', url: '../lista-marvel/thor-ragnarok' },
    { resultado: 'Black Panther', url: '../lista-marvel/black-panther' },
    { resultado: 'Avengers: Infinity War', url: '../lista-marvel/avengers-infinitywar' },
    { resultado: "Ant-Man y la Avispa", url: '../lista-marvel/antman-avispa' },
    { resultado: 'Capitana Marvel', url: '../lista-marvel/cap-marvel' },
    { resultado: 'Avengers: Endgame', url: '../lista-marvel/avengers-endgame' },
    { resultado: 'Black Widow', url: '../lista-marvel/black-widow' },
    { resultado: "Spider-Man", url: '../lista-marvel/spiderman1' },
    { resultado: 'Spider-Man 2', url: '../lista-marvel/spiderman2' },
    { resultado: 'Spider-Man 3', url: '../lista-marvel/spiderman3' },
    { resultado: 'The Amazing Spiderman', url: '../lista-marvel/amazing-spiderman' },
    { resultado: "Venom", url: '../lista-marvel/venom' },
    { resultado: 'Shang-Chi y la Leyenda de los Diez Anillos', url: '../lista-marvel/shang-chi' },
    { resultado: 'Eternals', url: '../lista-marvel/eternals' },
    { resultado: 'Doctor Strange en el Multiverso de la Locura', url: '../lista-marvel/doc-strange-multiverso' },
    { resultado: "Moon Knight", url: '../lista-marvel/moonknight' },
    { resultado: 'Loki', url: '../lista-marvel/loki' },
    { resultado: 'Yo Soy Groot', url: '../lista-marvel/groot' },
    { resultado: 'Spider-Man: Homecoming', url: '../lista-marvel/spiderman-homecoming' },
    { resultado: "Spiderman: Far From Home", url: '../lista-marvel/spiderman-far-from-home' },
    { resultado: 'Thor: Love and Thunder', url: '../lista-marvel/thor-lovethunder' },
    { resultado: 'Black Panther: Wakanda Forever', url: '../lista-marvel/black-panther-wakanda-forever' },
    { resultado: "Ant-Man y la Avisma: Quantumania", url: '../lista-marvel/antman-avispa-quantumania' },
    { resultado: 'Venom: Habrá Matanza', url: '../lista-marvel/venom-habra-matanza' },
    { resultado: 'Spider-Man: No Way Home', url: '../lista-marvel/spiderman-no-way-home' },
  ];

  query = removeAccents(query.toLowerCase());

  return resultadosConURLs.filter(item => removeAccents(item.resultado.toLowerCase()).startsWith(query));
}

searchInput.addEventListener('input', function() {
  const searchQuery = this.value;
  autocompleteList.innerHTML = '';

  if (searchQuery.length > 0) {
    const results = obtenerResultadosConURLs(searchQuery);

    if (results.length > 0) {
      autocompleteList.style.display = 'block';

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
    const resultObject = resultadosConURLs.find(item => removeAccents(item.resultado.toLowerCase()) === removeAccents(clickedResult.toLowerCase()));

    if (resultObject) {
      window.location.href = resultObject.url;
    }
  }
});

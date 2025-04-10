const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: "Ant-Man y la Avisma: Quantumania", url: '../lista-marvel/ant-man-y-la-avispa-quantumania' },
    { resultado: "Ant-Man y la Avispa", url: '../lista-marvel/ant-man-y-la-avispa' },
    { resultado: 'Ant-Man', url: '../lista-marvel/ant-man' },
    { resultado: 'Avengers: Endgame', url: '../lista-marvel/avengers-endgame' },
    { resultado: 'Avengers: Infinity War', url: '../lista-marvel/avengers-infinity-war' },
    { resultado: "Avengers: La Era de Ultron", url: '../lista-marvel/avengers-la-era-de-ultron' },
    { resultado: 'Black Panther: Wakanda Forever', url: '../lista-marvel/black-panther-wakanda-forever' },
    { resultado: 'Black Panther', url: '../lista-marvel/black-panther' },
    { resultado: 'Black Widow', url: '../lista-marvel/black-widow' },
    { resultado: 'Capitán América: Civil War', url: '../lista-marvel/capitan-america-civil-war' },
    { resultado: 'Capitán América y el Soldado del Invierno', url: '../lista-marvel/capitan-america-y-el-soldado-del-invierno' },
    { resultado: 'Capitán América', url: '../lista-marvel/capitan-america' },
    { resultado: 'Capitana Marvel', url: '../lista-marvel/capitana-marvel' },
    { resultado: 'Doctor Strange en el Multiverso de la Locura', url: '../lista-marvel/doctor-strange-en-el-multiverso-de-la-locura' },
    { resultado: 'Doctor Strange', url: '../lista-marvel/doctor-strange' },
    { resultado: 'Eternals', url: '../lista-marvel/eternals' },
    { resultado: 'Guardianes de la Galaxia', url: '../lista-marvel/guardianes-de-la-galaxia' },
    { resultado: "Guardianes de la Galaxia Vol.2", url: '../lista-marvel/guardianes-de-la-galaxia-vol2' },
    { resultado: "Guardianes de la Galaxia Vol.3", url: '../lista-marvel/guardianes-de-la-galaxia-vol3' },
    { resultado: 'Iron Man', url: '../lista-marvel/iron-man' },
    { resultado: "Iron Man 2", url: '../lista-marvel/iron-man-2' },
    { resultado: "Iron Man 3", url: '../lista-marvel/iron-man-3' },
    { resultado: 'Loki', url: '../lista-marvel/loki' },
    { resultado: 'Madame Web', url: '../lista-marvel/madame-web' },
    { resultado: "Moon Knight", url: '../lista-marvel/moon-knight' },
    { resultado: 'Shang-Chi y la Leyenda de los Diez Anillos', url: '../lista-marvel/shang-chi-y-la-leyenda-de-los-diez-anillos' },
    { resultado: "Spider-Man", url: '../lista-marvel/spider-man' },
    { resultado: 'Spider-Man 2', url: '../lista-marvel/spider-man-2' },
    { resultado: 'Spider-Man 3', url: '../lista-marvel/spider-man-3' },
    { resultado: "Spider-Man: Far From Home", url: '../lista-marvel/spider-man-far-from-home' },
    { resultado: 'Spider-Man: Homecoming', url: '../lista-marvel/spider-man-homecoming' },
    { resultado: 'Spider-Man: No Way Home', url: '../lista-marvel/spider-man-no-way-home' },
    { resultado: 'Spider-Man: Un Nuevo Universo', url: '../lista-marvel/spider-man-un-nuevo-universo' },
    { resultado: 'The Amazing Spider-Man', url: '../lista-marvel/the-amazing-spider-man' },
    { resultado: 'The Avengers', url: '../lista-marvel/the-avengers' },
    { resultado: 'Thor', url: '../lista-marvel/thor' },
    { resultado: 'Thor: Love and Thunder', url: '../lista-marvel/thor-love-and-thunder' },
    { resultado: 'Thor: Ragnarok', url: '../lista-marvel/thor-ragnarok' },
    { resultado: 'Thor: The Dark World', url: '../lista-marvel/thor-the-dark-world' },
    { resultado: "Venom", url: '../lista-marvel/venom' },
    { resultado: 'Venom: El Último Baile', url: '../lista-marvel/venom-el-ultimo-baile' },
    { resultado: 'Venom: Habrá Matanza', url: '../lista-marvel/venom-habra-matanza' },
    { resultado: 'Yo Soy Groot', url: '../lista-marvel/yo-soy-groot' },
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
    const resultObject = resultadosConURLs.find(item => removeAccents(item.resultado.toLowerCase()) === removeAccents(clickedResult.toLowerCase()));

    if (resultObject) {
      window.location.href = resultObject.url;
    }
  }
});

const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Boku no Hero Academia', url: '../lista-manga/boku-no-hero-academia' },
    { resultado: 'Chainsaw Man', url: '../lista-manga/chainsaw-man' },
    { resultado: 'Genshin Impact', url: '../lista-manga/genshin-impact' },
    { resultado: "Jojo's Bizarre Adventure", url: '../lista-manga/jojos-bizarre-adventure' },
    { resultado: "Jujutsu Kaisen", url: '../lista-manga/jujutsu-kaisen' },
    { resultado: "Kaiju No. 8", url: '../lista-manga/kaiju-no-8' },
    { resultado: 'Made in Abyss', url: '../lista-manga/made-in-abyss' },
    { resultado: 'Nanatsu no Taizai', url: '../lista-manga/nanatsu-no-taizai' },
    { resultado: 'One Piece', url: '../lista-manga/one-piece' },
    { resultado: 'Solo Leveling', url: '../lista-manga/solo-leveling' },
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

const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Aang', url: '../wiki-bh/aang' },
    { resultado: "Ada", url: '../wiki-bh/ada' },
    { resultado: 'Akuma no Kogo Hattori', url: '../wiki-bh/akuma-no-kogo-hattori' },
    { resultado: 'Akuma', url: '../wiki-bh/akuma' },
    { resultado: 'Alucard', url: '../wiki-bh/alucard' },
    { resultado: 'Amethyst', url: '../wiki-bh/amethyst' },
    { resultado: 'Apocalypse', url: '../wiki-bh/apocalypse' },
    { resultado: 'Arcadia', url: '../wiki-bh/Arcadia' },
    { resultado: 'Archfiend Zariel', url: '../wiki-bh/archfiend-zariel' },
    { resultado: 'Artemis', url: '../wiki-bh/Artemis' },
    { resultado: 'Asgard Bödvar', url: '../wiki-bh/asgard-bodvar' },
    { resultado: 'Asgardian Elite', url: '../wiki-bh/asgardian-elite' },
    { resultado: 'Assassins Creed', url: '../wiki-bh/assassins-creed' },
    { resultado: 'Astral Core Ada', url: '../wiki-bh/astral-core-ada' },
    { resultado: 'Asuka', url: '../wiki-bh/asuka' },
    { resultado: 'Asuri', url: '../wiki-bh/asuri' },
    { resultado: 'Aurora Brynn', url: '../wiki-bh/aurora-brynn' },
    { resultado: 'Avatar', url: '../wiki-bh/avatar' },
    { resultado: 'Azoth', url: '../wiki-bh/azoth' },
    { resultado: 'Barbara', url: '../wiki-bh/barbara' },
    { resultado: 'Barraza', url: '../wiki-bh/barraza' },
    { resultado: 'Beachbrawl', url: '../wiki-bh/beachbrawl' },
    { resultado: 'Beastmaster Sidra', url: '../wiki-bh/beastmaster-sidra' },
    { resultado: 'Becky Lynch', url: '../wiki-bh/becky-lynch' },
    { resultado: 'Ben 10', url: '../wiki-bh/ben10' },
    { resultado: 'Black Knight', url: '../wiki-bh/black-knight' },
    { resultado: 'Blackguard Keep', url: '../wiki-bh/blackguard-keep' },
    { resultado: 'Bödvar', url: '../wiki-bh/bodvar' },
    { resultado: 'Bombsketball', url: '../wiki-bh/bombsketball' },
    { resultado: 'Bounty', url: '../wiki-bh/bounty' },
    { resultado: 'Brawlball', url: '../wiki-bh/brawlball' },
    { resultado: 'Brynn', url: '../wiki-bh/brynn' },
    { resultado: 'Bubble Tag', url: '../wiki-bh/bubble-tag' },
    { resultado: 'Buddy', url: '../wiki-bh/buddy' },
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

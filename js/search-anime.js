const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');

let resultadosConURLs;

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerResultadosConURLs(query) {
  resultadosConURLs = [
    { resultado: 'Akame ga Kill!', url: '../lista-anime/akame-ga-kill' },
    { resultado: 'Ansatsu Kyoushitsu', url: '../lista-anime/ansatsu-kyoushitsu' },
    { resultado: 'Beastars', url: '../lista-anime/beastars' },
    { resultado: 'Blend S', url: '../lista-anime/blend-s' },
    { resultado: 'BNA: Brand New Animal', url: '../lista-anime/bna-brand-new-animal' },
    { resultado: 'Boku no Hero Academia', url: '../lista-anime/boku-no-hero-academia' },
    { resultado: 'Bokutachi wa Benkyou ga Dekinai', url: '../lista-anime/bokutachi-wa-benkyou-ga-dekinai' },
    { resultado: 'Chainsaw Man', url: '../lista-anime/chainsaw-man' },
    { resultado: 'Danmachi', url: '../lista-anime/danmachi' },
    { resultado: 'Darling in the FranXX', url: '../lista-anime/darling-in-the-franxx' },
    { resultado: 'Death Note', url: '../lista-anime/death-note' },
    { resultado: 'Dorohedoro', url: '../lista-anime/dorohedoro' },
    { resultado: 'Fairy Tail', url: '../lista-anime/fairy-tail' },
    { resultado: 'Fire Force', url: '../lista-anime/fire-force' },
    { resultado: 'Fuufu Ijou, Koibito Miman', url: '../lista-anime/fuufu-ijou-koibito-miman' },
    { resultado: 'Go-Tōbun no Hanayome', url: '../lista-anime/go-tobun-no-hanayome' },
    { resultado: 'Goblin Slayer', url: '../lista-anime/goblin-slayer' },
    { resultado: 'Gokushufudou', url: '../lista-anime/gokushufudou' },
    { resultado: 'Ijiranaide, Nagatoro-san', url: '../lista-anime/ijiranaide-nagatoro-san' },
    { resultado: 'Infinite Stratos', url: '../lista-anime/infinite-stratos' },
    { resultado: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu', url: '../lista-anime/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu' },
    { resultado: 'Isekai Nonbiri Nouka', url: '../lista-anime/isekai-nonbiri-nouka' },
    { resultado: "Jojo's Bizarre Adventure", url: '../lista-anime/jojos-bizarre-adventure' },
    { resultado: 'Jujutsu Kaisen', url: '../lista-anime/jujutsu-kaisen' },
    { resultado: 'Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life', url: '../lista-anime/kaiko-sareta-antoky-heisi-30-dai-no-slow-na-second-life' },
    { resultado: 'Kakegurui', url: '../lista-anime/kakegurui' },
    { resultado: 'Kami-tachi ni Hirowareta Otoko', url: '../lista-anime/kami-tachi-ni-hirowareta-otoko' },
    { resultado: 'Karakai-jouzu-no-takagi-san', url: '../lista-anime/karakai-jouzu-no-takagi-san' },
    { resultado: 'Kimetsu no Yaiba', url: '../lista-anime/kimetsu-no-yaiba' },
    { resultado: 'Kobayashi-san Chi no Maid Dragon', url: '../lista-anime/kobayashi-san-chi-no-maid-dragon' },
    { resultado: 'Komi-san wa, Comyushou desu', url: '../lista-anime/komi-san-wa-comyushou-desu' },
    { resultado: 'Kono Subarashii Sekai ni Shukufuku wo!', url: '../lista-anime/kono-subarashii-sekai-ni-shukufuku-wo' },
    { resultado: 'Made in Abyss', url: '../lista-anime/made-in-abyss' },
    { resultado: 'Mairimashita! Iruma-kun', url: '../lista-anime/mairimashita-iruma-kun' },
    { resultado: 'Mob Psycho 100', url: '../lista-anime/mob-psycho-100' },
    { resultado: 'Nanatsu no Taizai', url: '../lista-anime/nanatsu-no-taizai' },
    { resultado: 'Nande Koko ni Sensei ga!?', url: '../lista-anime/nande-koko-ni-sensei-ga' },
    { resultado: 'Naruto', url: '../lista-anime/naruto' },
    { resultado: 'Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu', url: '../lista-anime/ningen-fushin-no-boukensha-tachi-ga-sekai-wo-sukuu-you-desu' },
    { resultado: 'No Game No Life', url: '../lista-anime/no-game-no-life' },
    { resultado: 'Noragami', url: '../lista-anime/noragami' },
    { resultado: 'One Piece', url: '../lista-anime/one-piece' },
    { resultado: 'One Punch Man', url: '../lista-anime/one-punch-man' },
    { resultado: 'Oshi no Ko', url: '../lista-anime/oshi-no-ko' },
    { resultado: 'Overlord', url: '../lista-anime/overlord' },
    { resultado: 'Princess Connect! Re:Dive', url: '../lista-anime/princess-connect-re-dive' },
    { resultado: 'ReLIFE', url: '../lista-anime/relife' },
    { resultado: 'Re:Zero kara Hajimeru Isekai Saikatsu', url: '../lista-anime/re-zero-kara-hajimeru-isekai-seikatsu' },
    { resultado: 'Shigatsu wa Kimi no Uso', url: '../lista-anime/shigatsu-wa-kimi-no-uso' },
    { resultado: 'Shingeki no Kyojin', url: '../lista-anime/shingeki-no-kyojin' },
    { resultado: 'Sono Bisque Doll wa Koi wo Suru', url: '../lista-anime/sono-bisque-doll-wa-koi-wo-suru' },
    { resultado: 'Spy x Family', url: '../lista-anime/spy-x-family' },
    { resultado: 'Steins;Gate', url: '../lista-anime/steins-gate' },
    { resultado: 'Sunohara-sou no Kanrinrin-san', url: '../lista-anime/sunohara-sou-no-kanrinrin-san' },
    { resultado: 'Sword Art Online', url: '../lista-anime/sword-art-online' },
    { resultado: 'Tate no Yuusha no Nariagari', url: '../lista-anime/tate-no-yuusha-no-nariagari' },
    { resultado: 'Tensei Shitara Ken Deshita', url: '../lista-anime/tensei-shitara-ken-deshita' },
    { resultado: 'Tokyo Ghoul', url: '../lista-anime/tokyo-ghoul' },
    { resultado: 'Tokyo Revengers', url: '../lista-anime/tokyo-revengers' },
    { resultado: 'Uzaki-chan wa Asobitai!', url: '../lista-anime/uzaki-chan-wa-asobitai' },
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

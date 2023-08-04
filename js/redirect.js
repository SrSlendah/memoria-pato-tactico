function goTo(string) {

// Manga

    if (string == 'manga_jojo') {
        window.location.href = "../lista-manga/jojos-bizarre-adventure"
    };

    if (string == 'manga_nanatsu') {
        window.location.href = "../lista-manga/nanatsu-no-taizai"
    };

//Anime

    if (string == 'anime_jojo') {
        window.location.href = "../lista-anime/jojos-bizarre-adventure"
    };

    if (string == 'anime_nanatsu') {
        window.location.href = "../lista-anime/nanatsu-no-taizai"
    };

//Wiki Brawlhalla

    if (string == 'wbh_collectors') {
        window.open('https://store.steampowered.com/app/298641/Brawlhalla__Collectors_Pack/', '_blank')
    }

}
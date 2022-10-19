function showPolicia() {
    document.getElementById('policia').style.display = '';
    document.getElementById('policia-btn').style.backgroundColor = '#4b2966'
    document.getElementById('policia-btn').style.borderColor = '#311a42'
    document.getElementById('policia-btn').style.color = '#9e9e9e'
    document.getElementById('prisionero').style.display = 'none';
    document.getElementById('prisionero-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('prisionero-btn').style.borderColor = '#4b2866'
    document.getElementById('prisionero-btn').style.color = '#fff'
    document.getElementById('criminal').style.display = 'none';
    document.getElementById('criminal-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('criminal-btn').style.borderColor = '#4b2866'
    document.getElementById('criminal-btn').style.color = '#fff'
}

function showPrisionero() {
    document.getElementById('policia').style.display = 'none';
    document.getElementById('policia-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('policia-btn').style.borderColor = '#4b2866'
    document.getElementById('policia-btn').style.color = '#fff'
    document.getElementById('prisionero').style.display = '';
    document.getElementById('prisionero-btn').style.backgroundColor = '#4b2966'
    document.getElementById('prisionero-btn').style.borderColor = '#311a42'
    document.getElementById('prisionero-btn').style.color = '#9e9e9e'
    document.getElementById('criminal').style.display = 'none';
    document.getElementById('criminal-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('criminal-btn').style.borderColor = '#4b2866'
    document.getElementById('criminal-btn').style.color = '#fff'
}

function showCriminal() {
    document.getElementById('policia').style.display = 'none';
    document.getElementById('policia-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('policia-btn').style.borderColor = '#4b2866'
    document.getElementById('policia-btn').style.color = '#fff'
    document.getElementById('prisionero').style.display = 'none';
    document.getElementById('prisionero-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('prisionero-btn').style.borderColor = '#4b2866'
    document.getElementById('prisionero-btn').style.color = '#fff'
    document.getElementById('criminal').style.display = '';
    document.getElementById('criminal-btn').style.backgroundColor = '#4b2966'
    document.getElementById('criminal-btn').style.borderColor = '#311a42'
    document.getElementById('criminal-btn').style.color = '#9e9e9e'
}
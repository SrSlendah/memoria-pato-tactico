function showArmas() {
    document.getElementById('armas').style.display = '';
    document.getElementById('armas-btn').style.backgroundColor = '#4b2966'
    document.getElementById('armas-btn').style.borderColor = '#311a42'
    document.getElementById('armas-btn').style.color = '#9e9e9e'
    document.getElementById('explosivo').style.display = 'none';
    document.getElementById('explosivo-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('explosivo-btn').style.borderColor = '#4b2866'
    document.getElementById('explosivo-btn').style.color = '#fff'
    document.getElementById('melee').style.display = 'none';
    document.getElementById('melee-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('melee-btn').style.borderColor = '#4b2866'
    document.getElementById('melee-btn').style.color = '#fff'
}

function showExplosivo() {
    document.getElementById('armas').style.display = 'none';
    document.getElementById('armas-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('armas-btn').style.borderColor = '#4b2866'
    document.getElementById('armas-btn').style.color = '#fff'
    document.getElementById('explosivo').style.display = '';
    document.getElementById('explosivo-btn').style.backgroundColor = '#4b2966'
    document.getElementById('explosivo-btn').style.borderColor = '#311a42'
    document.getElementById('explosivo-btn').style.color = '#9e9e9e'
    document.getElementById('melee').style.display = 'none';
    document.getElementById('melee-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('melee-btn').style.borderColor = '#4b2866'
    document.getElementById('melee-btn').style.color = '#fff'
}

function showMelee() {
    document.getElementById('armas').style.display = 'none';
    document.getElementById('armas-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('armas-btn').style.borderColor = '#4b2866'
    document.getElementById('armas-btn').style.color = '#fff'
    document.getElementById('explosivo').style.display = 'none';
    document.getElementById('explosivo-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('explosivo-btn').style.borderColor = '#4b2866'
    document.getElementById('explosivo-btn').style.color = '#fff'
    document.getElementById('melee').style.display = '';
    document.getElementById('melee-btn').style.backgroundColor = '#4b2966'
    document.getElementById('melee-btn').style.borderColor = '#311a42'
    document.getElementById('melee-btn').style.color = '#9e9e9e'
}
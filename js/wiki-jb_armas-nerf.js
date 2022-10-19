function showDefault() {
    document.getElementById('default').style.display = '';
    document.getElementById('default-btn').style.backgroundColor = '#4b2966'
    document.getElementById('default-btn').style.borderColor = '#311a42'
    document.getElementById('default-btn').style.color = '#9e9e9e'
    document.getElementById('nerf').style.display = 'none';
    document.getElementById('nerf-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('nerf-btn').style.borderColor = '#4b2866'
    document.getElementById('nerf-btn').style.color = '#fff'
}

function showNerf() {
    document.getElementById('default').style.display = 'none';
    document.getElementById('default-btn').style.backgroundColor = '#6f3c96'
    document.getElementById('default-btn').style.borderColor = '#4b2866'
    document.getElementById('default-btn').style.color = '#fff'
    document.getElementById('nerf').style.display = '';
    document.getElementById('nerf-btn').style.backgroundColor = '#4b2966'
    document.getElementById('nerf-btn').style.borderColor = '#311a42'
    document.getElementById('nerf-btn').style.color = '#9e9e9e'
}
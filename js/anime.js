function showSection(section) {
    document.getElementById('sec1').style.display = 'none';
    document.getElementById('sec1-btn').style.backgroundColor = '#6f3c96';
    document.getElementById('sec1-btn').style.borderColor = '#4b2866';
    document.getElementById('sec1-btn').style.color = '#fff';
    document.getElementById('sec2').style.display = 'none';
    document.getElementById('sec2-btn').style.backgroundColor = '#6f3c96';
    document.getElementById('sec2-btn').style.borderColor = '#4b2866';
    document.getElementById('sec2-btn').style.color = '#fff';

    document.getElementById(`sec${section}`).style.display = '';
    document.getElementById(`sec${section}-btn`).style.backgroundColor = '#4b2966';
    document.getElementById(`sec${section}-btn`).style.borderColor = '#311a42';
    document.getElementById(`sec${section}-btn`).style.color = '#9e9e9e';
}
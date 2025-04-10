document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash === "#temporadas") {
    showSection(1);
  } else if (window.location.hash === "#historia_principal") {
    showSection(1);
  } else if (window.location.hash === "#peliculas") {
    showSection(2);
  } else if (window.location.hash === "#otros") {
    showSection(3);
  } else {
    showSection(1);
  }
});

window.addEventListener("hashchange", function() {
  if (window.location.hash === "#temporadas") {
    showSection(1);
  } else if (window.location.hash === "#historia_principal") {
    showSection(1);
  } else if (window.location.hash === "#peliculas") {
    showSection(2);
  } else if (window.location.hash === "#otros") {
    showSection(3);
  }
});


function showSection(sectionNumber) {
  const totalSections = 3;

  for (let i = 1; i <= totalSections; i++) {
    const section = document.getElementById('sec' + i);
    const button = document.getElementById('sec' + i + '-btn');

    if (section) {
      section.style.display = i === sectionNumber ? '' : 'none';
    }

    if (button) {
      button.style.backgroundColor = i === sectionNumber ? '#4b2966' : '#6f3c96';
      button.style.borderColor = i === sectionNumber ? '#311a42' : '#4b2866';
      button.style.color = i === sectionNumber ? '#9e9e9e' : '#fff';
    }
  }
}
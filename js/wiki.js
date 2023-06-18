// WIKI JB

function showSection(sectionNumber) {
  const totalSections = 11; // Actualiza esto con el número total de secciones
  
  for (let i = 1; i <= totalSections; i++) {
    const section = document.getElementById('sec' + i);
    const button = document.getElementById('sec' + i + '-btn');
    
    section.style.display = i === sectionNumber ? '' : 'none';
    button.style.backgroundColor = i === sectionNumber ? '#4b2966' : '#6f3c96';
    button.style.borderColor = i === sectionNumber ? '#311a42' : '#4b2866';
    button.style.color = i === sectionNumber ? '#9e9e9e' : '#fff';
  }
}
  
  function showSec1() {
    showSection(1);
  }
  
  function showSec2() {
    showSection(2);
  }
  
  function showSec3() {
    showSection(3);
  }
  
  function showSec4() {
    showSection(4);
  }
  
  function showSec5() {
    showSection(5);
  }
  
  function showSec6() {
    showSection(6);
  }
  
  function showSec7() {
    showSection(7);
  }
  
  function showSec8() {
    showSection(8);
  }
  
  function showSec9() {
    showSection(9);
  }
  
  function showSec10() {
    showSection(10);
  }
  
  function showSec11() {
    showSection(11);
  }
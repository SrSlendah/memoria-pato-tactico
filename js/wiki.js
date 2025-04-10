/* Overlay */
function abrirOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = '';
    document.body.classList.add('scroll-blocked');
    console.log("[Overlay] Se ha pulsado el botón de mas información, Se ha abierto el overlay ov" + overlayNumber)
  }
  else {
    console.warn("[Overlay] Se ha pulsado el botón de mas información, pero no se ha podido abrir el overlay ov" + overlayNumber)
  }
  
  
}

function cerrarOV(overlayNumber) {
  var overlay = document.getElementById('ov' + overlayNumber);
  if (overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('scroll-blocked');
    console.log("[Overlay] Se ha pulsado el boton de cerrar overlay, overlay cerrado")
  }
  else {
    console.warn("[Overlay] Se ha pulsado el botón de cerrar overlay, pero no se ha podido cerrar el overlay ov" + overlayNumber)
  }
}

function OvVisible() {
  var overlayNumber = 1;
  var overlay = document.getElementById('ov' + overlayNumber);

  while (overlay) {
    if (overlay.style.display !== 'none') {
      return true;
    }
    overlayNumber++;
    overlay = document.getElementById('ov' + overlayNumber);
  }

  return false;
}

function cerrarOVs() {
  var overlayNumber = 1;
  var overlay = document.getElementById('ov' + overlayNumber);

  while (overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('scroll-blocked');
    overlayNumber++;
    overlay = document.getElementById('ov' + overlayNumber);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape" && OvVisible()) {
    console.log("[Overlay] Se ha pulsado la tecla escape, overlay cerrado")
    cerrarOVs();
  }
  else {
    console.warn("[Overlay] Se ha pulsado la tecla escape sin haber ningun overlay activo, no ha habido ningun cambio")
  }
});

// Calculadora Elo BH

function calcularElo() {
  var x = parseInt(document.getElementById("eloInput-reset").value);

  if (!isNaN(x)) {
      if (x < 1400) {
          var resultado = x;
      } else {
          var resultado = Math.trunc(1400 + (x - 1400) / (3 - (3000 - x) / 800));
      }
      document.getElementById("resultado-elo-error").style.display = "none";
      document.getElementById("elo-calc-container").style.height = "250px";
  } else {
      document.getElementById("resultado-elo-error").textContent = "No se ha introducido el mejor Elo";
      document.getElementById("resultado-elo-error").style.display = "";
      document.getElementById("elo-calc-container").style.height = "275px";
      return;
  }

  document.getElementById("resultado-reset-value").textContent = resultado;
}

// Calculadora Glory BH
function calcularGlory() {
  var x = parseInt(document.getElementById("eloInput-glory").value);

  var y = parseInt(document.getElementById("winsInput-glory").value);

  if (isNaN(x) && isNaN(y)) {
    document.getElementById("resultado-glory-error").innerHTML = "Introduce todos los datos";
      document.getElementById("resultado-glory-error").style.display = "";
      document.getElementById("glory-calc-container").style.height = "345px";
      document.getElementById("resultado-glory-elo").innerHTML = 0
      document.getElementById("resultado-glory-wins").innerHTML = 0
      document.getElementById("resultado-glory-total").innerHTML = 0
      return;
  }

  if (isNaN(x)) {
      document.getElementById("resultado-glory-error").innerHTML = "No se ha introducido el mejor Elo";
      document.getElementById("resultado-glory-error").style.display = "";
      document.getElementById("glory-calc-container").style.height = "345px";
      document.getElementById("resultado-glory-elo").innerHTML = 0
      document.getElementById("resultado-glory-wins").innerHTML = 0
      document.getElementById("resultado-glory-total").innerHTML = 0
      return;
  }

  if (isNaN(y)) {
      document.getElementById("resultado-glory-error").innerHTML = "Cantidad de victorias invalida";
      document.getElementById("resultado-glory-error").style.display = "";
      document.getElementById("glory-calc-container").style.height = "345px";
      document.getElementById("resultado-glory-elo").innerHTML = 0
      document.getElementById("resultado-glory-wins").innerHTML = 0
      document.getElementById("resultado-glory-total").innerHTML = 0
      return;
  }

  if (y < 10) {
      document.getElementById("resultado-glory-error").innerHTML = "Mínimo de victorias no alcanzado";
      document.getElementById("resultado-glory-error").style.display = "";
      document.getElementById("glory-calc-container").style.height = "345px";
      document.getElementById("resultado-glory-elo").innerHTML = 0
      document.getElementById("resultado-glory-wins").innerHTML = 0
      document.getElementById("resultado-glory-total").innerHTML = 0
      return;
  }

  if (x && y > 10) {
    document.getElementById("resultado-glory-error").style.display = "none";
    document.getElementById("glory-calc-container").style.height = "325px";
  }

  var gloryElo;
  if (x < 1200) {
      gloryElo = 250;
  } else if (x >= 1200 && x <= 1285) {
      gloryElo = 10 * Math.trunc(25 + (75 * (x - 1200) / 86));
  } else if (x >= 1286 && x <= 1389) {
      gloryElo = 10 * Math.trunc(100 + (75 * (x - 1286) / 104));
  } else if (x >= 1390 && x <= 1679) {
      gloryElo = 10 * Math.trunc(187 + (113 * (x - 1390) / 290));
  } else if (x >= 1680 && x <= 1999) {
      gloryElo = 10 * Math.trunc(300 + (137 * (x - 1680) / 320));
  } else if (x >= 2000 && x <= 2299) {
      gloryElo = 10 * Math.trunc(437 + (43 * (x - 2000) / 300));
  } else if (x > 2300) {
      gloryElo = 10 * Math.trunc(480 + (x - 2300) / 20);
  }

  var gloryWins;
  if (y < 150) {
      gloryWins = 20 * y;
  } else {
      gloryWins = 245 + Math.trunc(450 * Math.pow(Math.log10(2 * y), 2));
  }

  document.getElementById("resultado-glory-elo").innerHTML = gloryElo
  document.getElementById("resultado-glory-wins").innerHTML = gloryWins
  document.getElementById("resultado-glory-total").innerHTML = (gloryElo + gloryWins)
}



// Secciones
  

function showSection(sectionNumber) {
  const totalSections = 12;

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
function showSubSection(subsectionNumber) {
  const totalSections = 12;

  for (let i = 1; i <= totalSections; i++) {
    const section = document.getElementById('subsec' + i);
    const button = document.getElementById('subsec' + i + '-btn');

    if (section) {
      section.style.display = i === subsectionNumber ? '' : 'none';
    }
    if (button) {
      button.style.backgroundColor = i === subsectionNumber ? '#4b2966' : '#6f3c96';
      button.style.borderColor = i === subsectionNumber ? '#311a42' : '#4b2866';
      button.style.color = i === subsectionNumber ? '#9e9e9e' : '#fff';
    }
  }
}
function showSubSubSection(subsubsectionNumber) {
  const totalSections = 12;

  for (let i = 1; i <= totalSections; i++) {
    const section = document.getElementById('subsubsec' + i);
    const button = document.getElementById('subsubsec' + i + '-btn');

    if (section) {
      section.style.display = i === subsubsectionNumber ? '' : 'none';
    }
    if (button) {
      button.style.backgroundColor = i === subsubsectionNumber ? '#4b2966' : '#6f3c96';
      button.style.borderColor = i === subsubsectionNumber ? '#311a42' : '#4b2866';
      button.style.color = i === subsubsectionNumber ? '#9e9e9e' : '#fff';
    }
  }
}


  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash === "#orion") {
        showSection(1);
    }
    if (window.location.hash === "#brynn") {
        showSection(2);
    }
    if (window.location.hash === "#ember") {
        showSection(3);
    }
    if (window.location.hash === "#bodvar") {
        showSection(4);
    }
    if (window.location.hash === "#asuri") {
        showSection(5);
    }
    if (window.location.hash === "#fait") {
        showSection(6);
    }
    if (window.location.hash === "#barraza") {
        showSection(7);
    }
    if (window.location.hash === "#teros") {
        showSection(8);
    }
    if (window.location.hash === "#val") {
        showSection(9);
    }
    if (window.location.hash === "#nix") {
        showSection(10);
    }
    if (window.location.hash === "#otros") {
        showSection(11);
    }
    if (window.location.hash === "#recompensas") {
        showSection(1);
        showSubSection(1);
    }
    if (window.location.hash === "#recompensas#pagina1") {
        showSubSection(1);
    }
    if (window.location.hash === "#recompensas#pagina2") {
        showSubSection(2);
    }
    if (window.location.hash === "#recompensas#pagina3") {
        showSubSection(3);
    }
    if (window.location.hash === "#recompensas#pagina4") {
        showSubSection(4);
    }
    if (window.location.hash === "#recompensas#pagina5") {
        showSubSection(5);
    }
    if (window.location.hash === "#recompensas#pagina6") {
        showSubSection(6);
    }
    if (window.location.hash === "#recompensas#pagina7") {
        showSubSection(7);
    }
    if (window.location.hash === "#recompensas#pagina8") {
        showSubSection(8);
    }
    if (window.location.hash === "#recompensas#pagina9") {
        showSubSection(9);
    }
    if (window.location.hash === "#recompensas#pagina10") {
        showSubSection(10);
    }
    if (window.location.hash === "#recompensas#pagina11") {
        showSubSection(11);
    }
    if (window.location.hash === "#recompensas#pagina12") {
        showSubSection(12);
    }
    if (window.location.hash === "#misiones") {
        showSection(2);
        showSubSubSection(1);
    }
    if (window.location.hash === "#misiones#pagina1") {
        showSubSubSection(1);
    }
    if (window.location.hash === "#misiones#pagina2") {
        showSubSubSection(2);
    }
    if (window.location.hash === "#misiones#pagina3") {
        showSubSubSection(3);
    }
    if (window.location.hash === "#misiones#pagina4") {
        showSubSubSection(4);
    }
    if (window.location.hash === "#misiones#pagina5") {
        showSubSubSection(5);
    }
    if (window.location.hash === "#misiones#pagina6") {
        showSubSubSection(6);
    }
    if (window.location.hash === "#misiones#pagina7") {
        showSubSubSection(7);
    }
    if (window.location.hash === "#misiones#pagina8") {
        showSubSubSection(8);
    }
    if (window.location.hash === "#misiones#pagina9") {
        showSubSubSection(9);
    }
    if (window.location.hash === "#misiones#pagina10") {
        showSubSubSection(10);
    }
    if (window.location.hash === "#misiones#pagina11") {
        showSubSubSection(11);
    }
    if (window.location.hash === "#misiones#pagina12") {
        showSubSubSection(12);
    }
    if (window.location.hash === "#fase1") {
        showSection(1);
    }
    if (window.location.hash === "#fase2") {
        showSection(2);
    }
    if (window.location.hash === "#fase3") {
        showSection(3);
    }
    if (window.location.hash === "#todas") {
        showSection(1);
    }
    if (window.location.hash === "#pc") {
        showSection(2);
    }
    if (window.location.hash === "#playstation") {
        showSection(3);
    }
    if (window.location.hash === "#xbox") {
        showSection(4);
    }
    if (window.location.hash === "#normales") {
        showSection(1);
    }
    if (window.location.hash === "#modosdejuego") {
        showSection(2);
    }
    if (window.location.hash === "#enprueba") {
        showSection(3);
    }
    if (window.location.hash === "#eliminados") {
        showSection(4);
    }
    if (window.location.hash === "#informacion") {
        showSection(1);
    }
    if (window.location.hash === "#rangos") {
        showSection(2);
        showSubSection(1);
    }
    if (window.location.hash === "#rangos#estano") {
        showSection(2);
        showSubSection(1);
    }
    if (window.location.hash === "#rangos#bronce") {
        showSection(2);
        showSubSection(2);
    }
    if (window.location.hash === "#rangos#plata") {
        showSection(2);
        showSubSection(3);
    }
    if (window.location.hash === "#rangos#oro") {
        showSection(2);
        showSubSection(4);
    }
    if (window.location.hash === "#rangos#platino") {
        showSection(2);
        showSubSection(5);
    }
    if (window.location.hash === "#rangos#diamante") {
        showSection(2);
        showSubSection(6);
    }
    if (window.location.hash === "#rangos#valhallan") {
        showSection(2);
        showSubSection(7);
    }
    if (window.location.hash === "#cosmeticos") {
        showSection(3);
    }
    if (window.location.hash === "#calculadora") {
        showSection(4);
    }
    if (window.location.hash === "#temporadas") {
        showSection(1);
    }
    if (window.location.hash === "#temporadas-clasicas") {
        showSection(2);
    }
    if (window.location.hash === "#filtro-leyendas") {
        showSection(1);
    }
    if (window.location.hash === "#tabla-de-armas") {
        showSection(2);
    }
});

window.addEventListener("hashchange", function() {
  if (window.location.hash === "#orion") {
      showSection(1);
  }
  if (window.location.hash === "#brynn") {
      showSection(2);
  }
  if (window.location.hash === "#ember") {
      showSection(3);
  }
  if (window.location.hash === "#bodvar") {
      showSection(4);
  }
  if (window.location.hash === "#asuri") {
      showSection(5);
  }
  if (window.location.hash === "#fait") {
      showSection(6);
  }
  if (window.location.hash === "#barraza") {
      showSection(7);
  }
  if (window.location.hash === "#teros") {
      showSection(8);
  }
  if (window.location.hash === "#val") {
      showSection(9);
  }
  if (window.location.hash === "#nix") {
      showSection(10);
  }
  if (window.location.hash === "#otros") {
      showSection(11);
  }
  if (window.location.hash === "#recompensas") {
      showSection(1);
      showSubSection(1);
  }
  if (window.location.hash === "#recompensas#pagina1") {
      showSubSection(1);
  }
  if (window.location.hash === "#recompensas#pagina2") {
      showSubSection(2);
  }
  if (window.location.hash === "#recompensas#pagina3") {
      showSubSection(3);
  }
  if (window.location.hash === "#recompensas#pagina4") {
      showSubSection(4);
  }
  if (window.location.hash === "#recompensas#pagina5") {
      showSubSection(5);
  }
  if (window.location.hash === "#recompensas#pagina6") {
      showSubSection(6);
  }
  if (window.location.hash === "#recompensas#pagina7") {
      showSubSection(7);
  }
  if (window.location.hash === "#recompensas#pagina8") {
      showSubSection(8);
  }
  if (window.location.hash === "#recompensas#pagina9") {
      showSubSection(9);
  }
  if (window.location.hash === "#recompensas#pagina10") {
      showSubSection(10);
  }
  if (window.location.hash === "#recompensas#pagina11") {
      showSubSection(11);
  }
  if (window.location.hash === "#recompensas#pagina12") {
      showSubSection(12);
  }
  if (window.location.hash === "#misiones") {
      showSection(2);
      showSubSubSection(1);
  }
  if (window.location.hash === "#misiones#pagina1") {
      showSubSubSection(1);
  }
  if (window.location.hash === "#misiones#pagina2") {
      showSubSubSection(2);
  }
  if (window.location.hash === "#misiones#pagina3") {
      showSubSubSection(3);
  }
  if (window.location.hash === "#misiones#pagina4") {
      showSubSubSection(4);
  }
  if (window.location.hash === "#misiones#pagina5") {
      showSubSubSection(5);
  }
  if (window.location.hash === "#misiones#pagina6") {
      showSubSubSection(6);
  }
  if (window.location.hash === "#misiones#pagina7") {
      showSubSubSection(7);
  }
  if (window.location.hash === "#misiones#pagina8") {
      showSubSubSection(8);
  }
  if (window.location.hash === "#misiones#pagina9") {
      showSubSubSection(9);
  }
  if (window.location.hash === "#misiones#pagina10") {
      showSubSubSection(10);
  }
  if (window.location.hash === "#misiones#pagina11") {
      showSubSubSection(11);
  }
  if (window.location.hash === "#misiones#pagina12") {
      showSubSubSection(12);
  }
  if (window.location.hash === "#fase1") {
      showSection(1);
  }
  if (window.location.hash === "#fase2") {
      showSection(2);
  }
  if (window.location.hash === "#fase3") {
      showSection(3);
  }
  if (window.location.hash === "#todas") {
      showSection(1);
  }
  if (window.location.hash === "#pc") {
      showSection(2);
  }
  if (window.location.hash === "#playstation") {
      showSection(3);
  }
  if (window.location.hash === "#xbox") {
      showSection(4);
  }
  if (window.location.hash === "#normales") {
      showSection(1);
  }
  if (window.location.hash === "#modosdejuego") {
      showSection(2);
  }
  if (window.location.hash === "#enprueba") {
      showSection(3);
  }
  if (window.location.hash === "#eliminados") {
      showSection(4);
  }
  if (window.location.hash === "#informacion") {
      showSection(1);
  }
  if (window.location.hash === "#rangos") {
      showSection(2);
      showSubSection(1);
  }
  if (window.location.hash === "#rangos#estano") {
      showSection(2);
      showSubSection(1);
  }
  if (window.location.hash === "#rangos#bronce") {
      showSection(2);
      showSubSection(2);
  }
  if (window.location.hash === "#rangos#plata") {
      showSection(2);
      showSubSection(3);
  }
  if (window.location.hash === "#rangos#oro") {
      showSection(2);
      showSubSection(4);
  }
  if (window.location.hash === "#rangos#platino") {
      showSection(2);
      showSubSection(5);
  }
  if (window.location.hash === "#rangos#diamante") {
      showSection(2);
      showSubSection(6);
  }
  if (window.location.hash === "#rangos#valhallan") {
      showSection(2);
      showSubSection(7);
  }
  if (window.location.hash === "#cosmeticos") {
      showSection(3);
  }
  if (window.location.hash === "#calculadora") {
      showSection(4);
  }
  if (window.location.hash === "#temporadas") {
      showSection(1);
  }
  if (window.location.hash === "#temporadas-clasicas") {
      showSection(2);
  }
  if (window.location.hash === "#filtro-leyendas") {
      showSection(1);
  }
  if (window.location.hash === "#tabla-de-armas") {
      showSection(2);
  }
});

// Cambio de imagen skins/podios/etc
function cambiar(id) {
  if (id === "eivor") {
    var imagen = document.getElementById("eivor-foto");
    var generoTexto = document.getElementById("eivor-genero");

    if (imagen.src.includes("eivor-female.png")) {
      imagen.src = "../media/wiki/bh/crossovers/assassins-creed/eivor-male.png";
      generoTexto.textContent = "(Male)";
    } else {
      imagen.src = "../media/wiki/bh/crossovers/assassins-creed/eivor-female.png";
      generoTexto.textContent = "(Female)";
    }
  } else if (id === "laracroft") {
    var imagen = document.getElementById("laracroft-foto");
    var nombreTexto = document.getElementById("laracroft-nombre");
    var arma1img = document.getElementById("laracroft-arma1-foto");
    var arma1nombre = document.getElementById("laracroft-arma1-nombre");
    var arma2img = document.getElementById("laracroft-arma2-foto");
    var arma2nombre = document.getElementById("laracroft-arma2-nombre");

    if (imagen.src.includes("/lara-croft.png")) {
      imagen.src = "../media/wiki/bh/crossovers/tomb-raider/survivor-lara-croft.png";
      nombreTexto.textContent = "Survivor Lara Croft";
      arma1img.src = "../media/wiki/bh/crossovers/tomb-raider/armas/survivor-lara-croft_recurve-bow.png";
      arma1nombre.textContent = "Recurve Bow";
      arma2img.src = "../media/wiki/bh/crossovers/tomb-raider/armas/survivor-lara-croft_tactical-pistols.png";
      arma2nombre.textContent = "Tactical Pistols";
    } else {
      imagen.src = "../media/wiki/bh/crossovers/tomb-raider/lara-croft.png";
      nombreTexto.textContent = "Lara Croft";
      arma1img.src = "../media/wiki/bh/crossovers/tomb-raider/armas/lara-croft_laras-bow.png";
      arma1nombre.textContent = "Lara's Bow";
      arma2img.src = "../media/wiki/bh/crossovers/tomb-raider/armas/lara-croft_dual-pistols.png";
      arma2nombre.textContent = "Dual Pistols";
    }
  } else if (id === "obakepetra") { // TEMPORADA 1 (Petra)
    var imagen = document.getElementById("obakepetra-foto");
    var nivel = document.getElementById("obakepetra-nivel");
    var arma1img = document.getElementById("obakepetra-arma1-foto");
    var arma2img = document.getElementById("obakepetra-arma2-foto");

    if (imagen.src.includes("/obake-petra_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/petra/obake-petra_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_haunting-terrors_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_demons-malice_lvl2.png";
    } else if (imagen.src.includes("/obake-petra_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/petra/obake-petra_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_haunting-terrors_lvl3.webp";
      arma2img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_demons-malice_lvl3.webp";
    } else {
      imagen.src = "../media/wiki/bh/skins/petra/obake-petra_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_haunting-terrors_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/petra/armas/obake-petra_demons-malice_lvl1.png";
    }
  } else if (id === "spirittemple") { // Temporada 1 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/1/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/1/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/1/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "futurewaveval") { // TEMPORADA 2 (Val)
    var imagen = document.getElementById("futurewaveval-foto");
    var nivel = document.getElementById("futurewaveval-nivel");
    var arma1img = document.getElementById("futurewaveval-arma1-foto");
    var arma2img = document.getElementById("futurewaveval-arma2-foto");

    if (imagen.src.includes("/future-wave-val_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/val/future-wave-val_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_the-playback_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_bitrate-blade_lvl2.png";
    } else if (imagen.src.includes("/future-wave-val_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/val/future-wave-val_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_the-playback_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_bitrate-blade_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/val/future-wave-val_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_the-playback_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/val/armas/future-wave-val_bitrate-blade_lvl1.png";
    }
  } else if (id === "arcadenights") { // Temporada 2 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/2/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/2/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/2/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "jormungandrmako") { // TEMPORADA 3 (Mako)
    var imagen = document.getElementById("jormungandrmako-foto");
    var nivel = document.getElementById("jormungandrmako-nivel");
    var arma1img = document.getElementById("jormungandrmako-arma1-foto");
    var arma2img = document.getElementById("jormungandrmako-arma2-foto");

    if (imagen.src.includes("/jormungandr-mako_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/mako/jormungandr-mako_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_serpents-fangs_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_world-ender_lvl2.png";
    } else if (imagen.src.includes("/jormungandr-mako_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/mako/jormungandr-mako_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_serpents-fangs_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_world-ender_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/mako/jormungandr-mako_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_serpents-fangs_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/mako/armas/jormungandr-mako_world-ender_lvl1.png";
    }
  } else if (id === "yggdrasilsfate") { // Temporada 3 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/3/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/3/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/3/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "octaviusmordex") { // TEMPORADA 4 (Mordex)
    var imagen = document.getElementById("octaviusmordex-foto");
    var nivel = document.getElementById("octaviusmordex-nivel");
    var arma1img = document.getElementById("octaviusmordex-arma1-foto");
    var arma2img = document.getElementById("octaviusmordex-arma2-foto");

    if (imagen.src.includes("/octavius-mordex_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/mordex/octavius-mordex_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_blood-moon-influence_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_betrayal-power_lvl2.png";
    } else if (imagen.src.includes("/octavius-mordex_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/mordex/octavius-mordex_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_blood-moon-influence_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_betrayal-power_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/mordex/octavius-mordex_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_blood-moon-influence_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/mordex/armas/octavius-mordex_betrayal-power_lvl1.png";
    }
  } else if (id === "fallofthelions") { // Temporada 4 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/4/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/4/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/4/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "eventhorizonartemis") { // TEMPORADA 5 (Artemis)
    var imagen = document.getElementById("eventhorizonartemis-foto");
    var nivel = document.getElementById("eventhorizonartemis-nivel");
    var arma1img = document.getElementById("eventhorizonartemis-arma1-foto");
    var arma2img = document.getElementById("eventhorizonartemis-arma2-foto");

    if (imagen.src.includes("/event-horizon-artemis_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/artemis/event-horizon-artemis_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_cygnus_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_quasar_lvl2.png";
    } else if (imagen.src.includes("/event-horizon-artemis_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/artemis/event-horizon-artemis_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_cygnus_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_quasar_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/artemis/event-horizon-artemis_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_cygnus_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/artemis/armas/event-horizon-artemis_quasar_lvl1.png";
    }
  } else if (id === "edgeofexistence") { // Temporada 5 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/5/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/5/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/5/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "elderwildragnir") { // TEMPORADA 6 (Ragnir)
    var imagen = document.getElementById("elderwildragnir-foto");
    var nivel = document.getElementById("elderwildragnir-nivel");
    var arma1img = document.getElementById("elderwildragnir-arma1-foto");
    var arma2img = document.getElementById("elderwildragnir-arma2-foto");

    if (imagen.src.includes("/elder-wild-ragnir_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/ragnir/elder-wild-ragnir_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_flora-blades_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_axe-of-regrowth_lvl2.png";
    } else if (imagen.src.includes("/elder-wild-ragnir_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/ragnir/elder-wild-ragnir_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_flora-blades_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_axe-of-regrowth_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/ragnir/elder-wild-ragnir_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_flora-blades_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/ragnir/armas/elder-wild-ragnir_axe-of-regrowth_lvl1.png";
    }
  } else if (id === "fabledovergrowth") { // Temporada 6 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/6/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/6/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/6/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "luminouspaladinjaeyun") { // TEMPORADA 7 (Jaeyun)
    var imagen = document.getElementById("luminouspaladinjaeyun-foto");
    var nivel = document.getElementById("luminouspaladinjaeyun-nivel");
    var arma1img = document.getElementById("luminouspaladinjaeyun-arma1-foto");
    var arma2img = document.getElementById("luminouspaladinjaeyun-arma2-foto");

    if (imagen.src.includes("/luminous-paladin-jaeyun_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/jaeyun/luminous-paladin-jaeyun_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_benevolent-light_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_divine-conviction_lvl2.png";
    } else if (imagen.src.includes("/luminous-paladin-jaeyun_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/jaeyun/luminous-paladin-jaeyun_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_benevolent-light_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_divine-conviction_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/jaeyun/luminous-paladin-jaeyun_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_benevolent-light_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/jaeyun/armas/luminous-paladin-jaeyun_divine-conviction_lvl1.png";
    }
  } else if (id === "herosquest") { // Temporada 7 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/7/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/7/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/7/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "corruptedbloodtezca") { // TEMPORADA 8 (Tezca)
    var imagen = document.getElementById("corruptedbloodtezca-foto");
    var nivel = document.getElementById("corruptedbloodtezca-nivel");
    var arma1img = document.getElementById("corruptedbloodtezca-arma1-foto");
    var arma2img = document.getElementById("corruptedbloodtezca-arma2-foto");

    if (imagen.src.includes("/corrupted-blood-tezca_lvl1")) {
      imagen.src = "../media/wiki/bh/skins/tezca/corrupted-blood-tezca_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_cloud-kickers_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_malady-wear_lvl2.png";
    } else if (imagen.src.includes("/corrupted-blood-tezca_lvl2")) {
      imagen.src = "../media/wiki/bh/skins/tezca/corrupted-blood-tezca_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_cloud-kickers_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_malady-wear_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/tezca/corrupted-blood-tezca_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_cloud-kickers_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/tezca/armas/corrupted-blood-tezca_malady-wear_lvl1.png";
    }
  } else if (id === "darkheartexcavation") { // Temporada 8 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/8/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/8/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/8/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "wushangseeker") { // TEMPORADA 9 (Wu Shang)
    var imagen = document.getElementById("wushangseeker-foto");
    var nivel = document.getElementById("wushangseeker-nivel");
    var arma1img = document.getElementById("wushangseeker-arma1-foto");
    var arma2img = document.getElementById("wushangseeker-arma2-foto");

    if (imagen.src.includes("/wu-shang-the-seeker_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/wu-shang/wu-shang-the-seeker_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_earthly-answers_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_divine-question_lvl2.png";
    } else if (imagen.src.includes("/wu-shang-the-seeker_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/wu-shang/wu-shang-the-seeker_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_earthly-answers_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_divine-question_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/wu-shang/wu-shang-the-seeker_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_earthly-answers_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/wu-shang/armas/wu-shang-the-seeker_divine-question_lvl1.png";
    }
  } else if (id === "thetruth") { // Temporada 9 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/9/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/9/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/9/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "fallenprinceteros") { // TEMPORADA 10 (Teros)
    var imagen = document.getElementById("fallenprinceteros-foto");
    var nivel = document.getElementById("fallenprinceteros-nivel");
    var arma1img = document.getElementById("fallenprinceteros-arma1-foto");
    var arma2img = document.getElementById("fallenprinceteros-arma2-foto");

    if (imagen.src.includes("/fallen-prince-teros_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/teros/fallen-prince-teros_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_star-crossed-nightmare_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_taurus-rebellion_lvl2.png";
    } else if (imagen.src.includes("/fallen-prince-teros_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/teros/fallen-prince-teros_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_star-crossed-nightmare_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_taurus-rebellion_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/teros/fallen-prince-teros_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_star-crossed-nightmare_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/teros/armas/fallen-prince-teros_taurus-rebellion_lvl1.png";
    }
  } else if (id === "sliceoflife") { // Temporada 10 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/10/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/10/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/10/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  } else if (id === "ascendantazoth") { // TEMPORADA 11 (Azoth)
    var imagen = document.getElementById("ascendantazoth-foto");
    var nivel = document.getElementById("ascendantazoth-nivel");
    var arma1img = document.getElementById("ascendantazoth-arma1-foto");
    var arma2img = document.getElementById("ascendantazoth-arma2-foto");

    if (imagen.src.includes("/ascendant-azoth_lvl1.png")) {
      imagen.src = "../media/wiki/bh/skins/azoth/ascendant-azoth_lvl2.png";
      nivel.textContent = "Nivel 2";
      arma1img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_empress-favor_lvl2.png";
      arma2img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_lich-slayer_lvl2.png";
    } else if (imagen.src.includes("/ascendant-azoth_lvl2.png")) {
      imagen.src = "../media/wiki/bh/skins/azoth/ascendant-azoth_lvl3.png";
      nivel.textContent = "Nivel 3";
      arma1img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_empress-favor_lvl3.png";
      arma2img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_lich-slayer_lvl3.png";
    } else {
      imagen.src = "../media/wiki/bh/skins/azoth/ascendant-azoth_lvl1.png";
      nivel.textContent = "Nivel 1";
      arma1img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_empress-favor_lvl1.png";
      arma2img.src = "../media/wiki/bh/skins/azoth/armas/ascendant-azoth_lich-slayer_lvl1.png";
    }
  } else if (id === "fallofixanocala") { // Temporada 11 (Podio)
    var imagen = document.getElementById("podio-foto");
    var nivel = document.getElementById("podio-lvl");

    if (imagen.src.includes("/podio-lvl1.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/11/podio-lvl2.png";
      nivel.textContent = "Nivel 2";
    } else if (imagen.src.includes("/podio-lvl2.png")) {
      imagen.src = "../media/wiki/bh/pase-batalla/11/podio-lvl3.png";
      nivel.textContent = "Nivel 3";
    } else {
      imagen.src = "../media/wiki/bh/pase-batalla/11/podio-lvl1.png";
      nivel.textContent = "Nivel 1";
    }
  }



}

function bp_pararEP(id) {
  const video = document.getElementById('episodio'+ id) ;

  video.pause();
  video.currentTime = 0;
}
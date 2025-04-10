
function filtrarVersion() {
    var selectedVersion = document.getElementById("version-select").value;
    var rows = document.querySelectorAll(".row");

    rows.forEach(function(row) {
        if (row.classList.contains(selectedVersion)) {
            row.style.display = "flex";
        } else {
            row.style.display = "none";
        }
    });
}

window.onload = filtrarVersion;


function descargar(id, nombre) {
    
    const urls = {
        "25w08a_v1-3": "../media/mc/resourcepacks/random-things/mc_25w08a/v_1-3/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip",
        "25w08a_v1-2": "../media/mc/resourcepacks/random-things/mc_25w08a/v_1-2/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip",
        "25w08a_v1-1": "../media/mc/resourcepacks/random-things/mc_25w08a/v_1-1/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip",
        "25w08a_v1-0": "../media/mc/resourcepacks/random-things/mc_25w08a/v_1-0/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip",

        "1-21-4_v1-3": "../media/mc/resourcepacks/random-things/mc_1-21-4/v_1-3/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip",
        "1-21-4_v1-2": "../media/mc/resourcepacks/random-things/mc_1-21-4/v_1-2/§kaaa§r§l§d Random Things §0§r§kaaa§r.zip"
    };

    const url = urls[id];

    if (!url) {
        console.error("ID no válido");
        return;
    }

    const link = document.createElement("a");
    link.href = url;
    link.download = nombre;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}






async function cargarCambios() {
    const respuesta = await fetch('./random-things_cambios.json');
    const cambios = await respuesta.json();
    return cambios;
}

async function verCambios(version) {
    const cambios = await cargarCambios();
    const contenedorTexto = document.querySelector('.cambios-texto');
    const contenedorCambios = document.querySelector('.cambios-container');
    const dataVersion = cambios[version];

    const versionElement = document.querySelector('h2 ver');
    if (versionElement) {
        let formattedVersion = '';

        
        if (version === 'mc-25w08a_1.0') {
            formattedVersion = '1.0 (25w08a)';
        } else if (version === 'mc-25w08a_1.1') {
            formattedVersion = '1.1 (25w08a)';
        } else if (version === 'mc-1.21.4_1.2') {
            formattedVersion = '1.2 (1.21.4)';
        } else if (version === 'mc-25w08a_1.2') {
            formattedVersion = '1.2 (25w08a)';
        } else if (version === 'mc-1.21.4_1.3') {
            formattedVersion = '1.3 (1.21.4)';
        } else if (version === 'mc-25w08a_1.3') {
            formattedVersion = '1.3 (25w08a)';
        } else {
            formattedVersion = version;
        }
        
        versionElement.textContent = formattedVersion;
    }



    if (dataVersion) {
        let contenidoHTML = '';
    
        // Objetos cambiados
        if (Array.isArray(dataVersion.objetos_cambiados) && dataVersion.objetos_cambiados.length > 0) {
            contenidoHTML += '<hr class="separador-cambios">';
            contenidoHTML += '<h4>Objetos cambiados:</h4>';
            contenidoHTML += '<ul>';
            dataVersion.objetos_cambiados.forEach(objeto => {
                contenidoHTML += `<li><span>${objeto.objeto}</span>= ${objeto.cambio}</li>`;
            });
            contenidoHTML += '</ul>';
        }
    
        // Texturas cambiadas
        if (Array.isArray(dataVersion.texturas_cambiadas) && dataVersion.texturas_cambiadas.length > 0) {
            contenidoHTML += '<hr class="separador-cambios">';
            contenidoHTML += '<h4>Texturas cambiadas:</h4>';
            contenidoHTML += '<ul>';
            dataVersion.texturas_cambiadas.forEach(objeto => {
                contenidoHTML += `<li><span>${objeto.objeto}</span>= ${objeto.cambio}</li>`;
            });
            contenidoHTML += '</ul>';
        }
    
        // Sonidos cambiados
        if (Array.isArray(dataVersion.sonidos_cambiados) && dataVersion.sonidos_cambiados.length > 0) {
            contenidoHTML += '<hr class="separador-cambios">';
            contenidoHTML += '<h4>Sonidos cambiados:</h4>';
            contenidoHTML += '<ul>';
            dataVersion.sonidos_cambiados.forEach(sonido => {
                contenidoHTML += `<li><span>${sonido.sonido}</span>= ${sonido.nuevo_sonido}</li>`;
            });
            contenidoHTML += '</ul>';
        }
    
        // Otros cambios
        if (Array.isArray(dataVersion.otros_cambios) && dataVersion.otros_cambios.length > 0) {
            contenidoHTML += '<hr class="separador-cambios">';
            contenidoHTML += '<h4>Otros cambios:</h4>';
            contenidoHTML += '<ul>';
            dataVersion.otros_cambios.forEach(otro => {
                contenidoHTML += `<li><span>${otro.otro}</span></li>`;
            });
            contenidoHTML += '</ul>';
        }
    
        contenedorTexto.innerHTML = contenidoHTML;
        contenedorTexto.style.display = 'block';
        contenedorCambios.style.display = 'block';
    } else {
        contenedorTexto.innerHTML = "<ul><li><span>No hay cambios disponibles para esta versión.</span></li></ul>";
        contenedorTexto.style.display = 'block';
        contenedorCambios.style.display = 'block';
    }
    
    
const h2Titulo = document.querySelector('h2');
const h2Position = h2Titulo.getBoundingClientRect().top + window.scrollY;
const scrollToPosition = h2Position;


window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
});

}
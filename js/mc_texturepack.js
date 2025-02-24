
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
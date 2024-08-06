function GetVersion() {
    let version = document.getElementById("versiones").value;
    let elemento = document.getElementById(version);

    let elementos = document.querySelectorAll("[id]:not(#versiones)");
    elementos.forEach(el => {
        // Verifica si el ID es numérico
        if (/^\d+$/.test(el.id)) {
            el.style.display = "none";
        }
    });

    if (elemento) {
        elemento.style.display = "block";
    } else {
        console.warn("El elemento con ID '" + version + "' no existe.");
    }

    console.log("Se ha recibido el valor " + version);
}

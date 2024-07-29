function GetVersion() {
    // Obtener el valor seleccionado del menú desplegable
    let version = document.getElementById("versiones").value;
    let elemento = document.getElementById(version);  // ID del elemento a mostrar

    // Ocultar todos los elementos con ID que no sea "#versiones"
    let elementos = document.querySelectorAll("[id]:not(#versiones)");
    elementos.forEach(el => el.style.display = "none");

    // Mostrar el elemento seleccionado si existe
    if (elemento) {
        elemento.style.display = "block"; // Asegúrate de que el elemento se muestre
    } else {
        console.warn("El elemento con ID '" + version + "' no existe.");
    }

    // Imprimir el valor recibido para depuración
    console.log("Se ha recibido el valor " + version);
}

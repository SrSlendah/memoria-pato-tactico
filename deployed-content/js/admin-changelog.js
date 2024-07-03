function GetVersion() {
    var version = document.getElementById("versiones").value;
    var elemento = document.getElementById("v" + version);

    // Ocultar todos los elementos con ID que comienza por "v" excepto "#versiones"
    var elementos = document.querySelectorAll("[id^='v']:not(#versiones)");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }

    // Mostrar el elemento seleccionado
    elemento.style.display = "";

    console.log("Se ha recibido el valor " + version);
}
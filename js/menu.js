function abrir_menu() {

    var menu = document.getElementById("menu-overlay")

    menu.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function cerrar_menu() {
    
    var menu = document.getElementById("menu-overlay")

    menu.style.display = "none";

    document.body.style.overflow = "auto";
}
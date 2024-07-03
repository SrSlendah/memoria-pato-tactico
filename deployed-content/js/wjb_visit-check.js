
function CheckVisit(){
    
    var cookies = document.cookie.split(';');
    
    var hasSeenAlert = false;
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("HasSeenAlert=true") === 0) {
            hasSeenAlert = true;
            break;
        }
    }

    if (hasSeenAlert) {
        console.log("Ya ha sido mostrado el aviso, omitiendo.");
    }
    else {
        console.log("El aviso no ha sido mostrado, mostrando.");
        
        var fecha = new Date();
        var fechaCad = new Date(fecha.getTime() + 6 * 60 * 60 * 1000);
        var fechaCadUTC = fechaCad.toUTCString();

        var nombre = "HasSeenAlert"
        var valor = "true"

        document.cookie = nombre + "=" + valor + "; expires=" + fechaCadUTC + "; path=/";
        
        document.getElementById("AlertaAbandono").style.display = "flex"
    }
}

window.onload = function(){

    CheckVisit();

}


function cerrarAlerta(){

    document.getElementById("AlertaAbandono").style.display = "none"

}



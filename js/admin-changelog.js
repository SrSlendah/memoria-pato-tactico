function new_versions_btn() {
    window.location.replace('./changelog')
}


function GetVersion() {
    var version = document.getElementById("versiones").value


    if (version == 3) {
        document.getElementById("v3").style.display = '';
        document.getElementById("v2").style.display = 'none';
        document.getElementById("v1").style.display = 'none';

        console.log("Se ha recibido el valor "+version)
    } 

    if (version == 2) {
        document.getElementById("v3").style.display = 'none';
        document.getElementById("v2").style.display = '';
        document.getElementById("v1").style.display = 'none';

        console.log("Se ha recibido el valor "+version)
    } 

    if (version == 1) {
        document.getElementById("v3").style.display = 'none';
        document.getElementById("v2").style.display = 'none';
        document.getElementById("v1").style.display = '';

        console.log("Se ha recibido el valor "+version)
    } 

    if (version == 0) {
        window.location.replace('./changelog_old')

        console.log("Se ha recibido el valor "+version)
    } 









}


function login() {

    var usuario = document.getElementById("u").value;
    var passwrd = document.getElementById("p").value;

    if(usuario == "Slendah" && passwrd == "mongoloyey") {

        window.location = "./administracion"

    }

    else if (usuario == "" || passwrd == "") {
        document.getElementById("login_empty").style.display = "unset"
        document.getElementById("login_error").style.display = "none"
        
        console.log("Error de identificacion: No se ha otorgado usuario o contraseña")
    }


    else {
        document.getElementById("login_error").style.display = "unset"
        document.getElementById("login_empty").style.display = "none"
        
        console.log("Error de identificacion: Usuario o contraseña incorrectos")
    }


}











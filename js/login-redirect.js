
function CheckLogin(){
    
    var status = window.localStorage.getItem("IsLoggedIn");

    if (status) {
        console.log("La sesion esta iniciada, se ha redirigido.");
        window.location = "./administracion";
    }
}


window.onload = function(){

    CheckLogin();

}



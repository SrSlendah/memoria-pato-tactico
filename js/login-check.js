
function CheckLoginStatus(){
    
    var status = window.localStorage.getItem("IsLoggedIn");

    if (status) {
        console.log("La sesion esta iniciada.");
    }
    else {
        window.localStorage.setItem("NotLoggedIn", true);
        console.log("La sesion no esta iniciada, se ha redirigido.");
        window.location = "/login";
    }
}


window.onload = function(){

    CheckLoginStatus();

}
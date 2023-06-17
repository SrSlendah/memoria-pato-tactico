
function NoLoginStatus() {

    var NotLoggedIn = window.localStorage.getItem("NotLoggedIn")

    if(NotLoggedIn){
        window.localStorage.removeItem("NotLoggedIn")
        document.getElementById("not_allowed").style.display = "";
        console.log("sent")
        
    }
}


window.onload = function() {

    NoLoginStatus();

}



function login() {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Slendah" && password === "mongoloyey") {
        window.location = "./administracion"
    } 
    else {
        if (username === "" || password === ""){
            document.getElementById("login_empty").style.display = "";
            document.getElementById("login_error").style.display = "none";
        }      
        else {
            document.getElementById("login_empty").style.display = "none";
            document.getElementById("login_error").style.display = "";
        }
    }
  };
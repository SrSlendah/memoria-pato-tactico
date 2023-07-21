function login() {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Slendah" || "slendah" && password === "mongoloyey") {
        window.localStorage.setItem("IsLoggedIn", true);
        window.location = "./administracion"
    } 
    else {
        if (username === "" || password === ""){
            document.getElementById("login_empty").style.display = "";
            document.getElementById("login_error").style.display = "none";
            document.getElementById("not_allowed").style.display = "none";
        }      
        else {
            document.getElementById("login_empty").style.display = "none";
            document.getElementById("login_error").style.display = "";
            document.getElementById("not_allowed").style.display = "none";
        }
    }
  };
  
  
  function CheckLogin(){
      
      var status = window.localStorage.getItem("IsLoggedIn");
  
      if (status) {
          console.log("La sesion esta iniciada, se ha redirigido.");
          window.location = "./administracion";
      }
  }

  function NoLoginStatus() {
  
      var NotLoggedIn = window.localStorage.getItem("NotLoggedIn")
  
      if(NotLoggedIn){
          window.localStorage.removeItem("NotLoggedIn")
          document.getElementById("not_allowed").style.display = "";
          console.log("sent")
          
      }
  }

  
window.onload = function(){

    CheckLogin();
    NoLoginStatus();

}



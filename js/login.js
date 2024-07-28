window.onload = function(){

    CheckLogin();
    NoLoginStatus();

}

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



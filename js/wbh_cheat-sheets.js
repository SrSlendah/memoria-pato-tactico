function GetArma1() {
    const selectElement = document.getElementById("arma1");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const imageUrl = selectedOption.getAttribute("data-image");
    const imagenSeleccionada = document.getElementById("imagenSeleccionada");
  
    if (imageUrl) {
      imagenSeleccionada.style.display = "block";
      imagenSeleccionada.querySelector("img").src = imageUrl;
    } else {
      imagenSeleccionada.style.display = "none";
    }
  }
  
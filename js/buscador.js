document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll("#articulo").forEach(elemento => {

            elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? elemento.classList.remove("filtro")
                : elemento.classList.add("filtro")
        })

    }


})
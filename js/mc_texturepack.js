
function filtrarVersion() {
    var selectedVersion = document.getElementById("version-select").value;
    var rows = document.querySelectorAll(".row");

    rows.forEach(function(row) {
        if (row.classList.contains(selectedVersion)) {
            row.style.display = "flex";
        } else {
            row.style.display = "none";
        }
    });
}

window.onload = filtrarVersion;
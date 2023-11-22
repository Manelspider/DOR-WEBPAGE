// Ejecutar setDarkTheme() al cargar la página por defecto
document.addEventListener("DOMContentLoaded", function () {
    setDarkTheme();
});

function setLightTheme() {
    var element = document.body;
    element.classList.remove("dark-theme");

    // Cambiar visibilidad de los íconos
    var darkIcons = document.getElementsByClassName("fa-moon");
    var lightIcons = document.getElementsByClassName("fa-sun");

    for (var i = 0; i < darkIcons.length; i++) {
        darkIcons[i].style.display = "block";
    }

    for (var j = 0; j < lightIcons.length; j++) {
        lightIcons[j].style.display = "none";
    }

    // Asegurarse de que la clase "white-theme" esté presente
    if (!element.classList.contains("white-theme")) {
        element.classList.add("white-theme");
    }
}

function setDarkTheme() {
    var element = document.body;
    element.classList.add("dark-theme");

    // Cambiar visibilidad de los íconos
    var darkIcons = document.getElementsByClassName("fa-moon");
    var lightIcons = document.getElementsByClassName("fa-sun");

    for (var i = 0; i < darkIcons.length; i++) {
        darkIcons[i].style.display = "none";
    }

    for (var j = 0; j < lightIcons.length; j++) {
        lightIcons[j].style.display = "block";
    }

    // Quitar la clase "white-theme" si está presente
    if (element.classList.contains("white-theme")) {
        element.classList.remove("white-theme");
    }
}

// Puedes llamar a estas funciones según tus necesidades
// Por ejemplo, setLightTheme() para establecer el tema claro
// y setDarkTheme() para establecer el tema oscuro.

// Ejemplo de cómo podrías usar estas funciones con un botón:
document.getElementById("set-light-theme-button").addEventListener("click", setLightTheme);
document.getElementById("set-dark-theme-button").addEventListener("click", setDarkTheme);

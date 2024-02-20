document.addEventListener("DOMContentLoaded", function () {
    setLightTheme();
});

function toggleTheme() {
    var element = document.body;
    if (element.classList.contains("dark-theme")) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

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
function toggleMenu() {
    var links = document.querySelector(".links");
    links.classList.toggle("open");
}
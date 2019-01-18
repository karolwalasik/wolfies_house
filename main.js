document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById("toggleButton");
    document.getElementById("menu").classList.remove("showmenu");
    menu.addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("showmenu");

    });
}, false);
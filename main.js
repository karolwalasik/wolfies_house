document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById("toggleButton");
    document.getElementById("menu").classList.add("hidemenu");
    menu.addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("hidemenu");

    });
}, false);
var menuSuperior = document.querySelector("#fixed");

window.onscroll = function () {
    let value = parseInt(document.documentElement.scrollTop);
    if (value >= 60)
        menuSuperior.classList.add("nav-color");
    else if (value < 100)
        menuSuperior.classList.remove("nav-color");

}
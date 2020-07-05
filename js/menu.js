var hamburger = document.querySelector("#burger");
var nav = document.querySelector("#menu-superior");
var navLink = document.querySelector(".nav-list");




hamburger.addEventListener("click", () => {
    if (!nav.classList.contains("ativo"))
        nav.classList.add("ativo");
    else
        nav.classList.remove("ativo");
});

navLink.addEventListener("click", () => {
    if (!nav.classList.contains("ativo"))
        nav.classList.add("ativo");
    else
        nav.classList.remove("ativo");
});
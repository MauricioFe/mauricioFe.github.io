var hamburger = document.querySelector("#burger");
var nav = document.querySelector("#menu-superior");




hamburger.addEventListener("click", () => {
    if (!nav.classList.contains("ativo"))
        nav.classList.add("ativo");
    else
        nav.classList.remove("ativo");
})


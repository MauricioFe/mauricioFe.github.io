var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { avançarSlide(1) }, 4000);
})

// Essa função determina se os slides vão avançar ou retroceder
function avançarSlide(currentSlide) {
    clearInterval(myTimer);
    if (currentSlide < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    /*Se o currentSlide for negativo o slide selecionado será o idice anterior ao atual
  se você estiver na terceira frase (no índice 2) e clicar na seta para trás, 
  estará selecionando o slide no índice como o slide atual a ser mostrado. */

    if (currentSlide === -1) {
        myTimer = setInterval(function () { avançarSlide(currentSlide + 2) }, 4000);
    } else {
        myTimer = setInterval(function () { avançarSlide(currentSlide + 1) }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(currentSlide) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { avançarSlide(currentSlide + 1) }, 4000);
    showSlides(slideIndex = currentSlide);
}

function showSlides(currentSlide) {
    var i;
    var slides = document.getElementsByClassName("frase");
    var dots = document.getElementsByClassName("dot");
    if (currentSlide > slides.length) { slideIndex = 1 }
    if (currentSlide < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}




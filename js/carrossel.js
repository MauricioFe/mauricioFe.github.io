var proximaFrase = 1; //Guarda a posição de uma frase. Ele inicia com 1 já que a posição 0 e da frase que aparece primeiro
var zIndexAtual = 0; //É uma variável para fazer o incremento do z-index da frase atual
var frases = document.querySelector('#slider').children; //vetor que armazena todas as frases
function currentSlide(n) {
    proximaFrase = n;
    avancarFrase();
}
function avancarFrase() {
console.log(proximaFrase)
    frase = frases[proximaFrase]; //variavel que pegar a proxima frase a ser mostrada;
    frase.style.zIndex = ++zIndexAtual;// increnta o zIndex da frase atual;
    frase.style.marginLeft = "0%" //reseta a margin da frase fazendo ela aparecer 

    proximaFrase++; //Alterna de imagem

    if (proximaFrase >= frases.length) {
        proximaFrase = 0; //reinicia a variavel
    }
    //Essa função permite que as frases que já passaram voltem para fora da área visível
    setTimeout(resetarFrase, 1500);
}
function resetarFrase() {
    fraseVisivel = proximaFrase - 1;
    // se a frase visivel alcançou o inicio da fila, voltar para o final
    if (fraseVisivel < 0)
        fraseVisivel = frases.length - 1;

    for (var i = 0; i < frases.length; i++) {
        if (i != fraseVisivel)
            frases[i].style.marginLeft = "100%"
    }
}
setInterval(avancarFrase, 5000);//chamada do método

// var slideIndex = 1;
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.querySelectorAll(".frase");
//     var dots = document.querySelectorAll(".dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add("active");
// }

//setInterval(function () { showSlides(slideIndex) }, 3000)
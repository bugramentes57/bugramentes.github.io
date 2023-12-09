var timer;
var slideIndex = 1;
showslides(slideIndex);

function plusSlides(n){
    showslides(slideIndex+=n);
}

function currentSlide(n){
    showslides(slideIndex = n);
}

function showslides(n){
    var i;
    var slides = document.getElementsByClassName("slide-contain slider-opt03__layout01");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    slides[slideIndex - 1].style.display = "block";
    clearTimeout(timer);
    timer = setTimeout(() => plusSlides(1), 2000);

}
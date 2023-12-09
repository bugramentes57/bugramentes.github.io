document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector('.biolife-carousel');
    
    if (slider) {
        // Slick slider initialize
        $(slider).slick({
            arrows: true,
            dots: false,
            slidesMargin: 0,
            slidesToShow: 1,
            infinite: true,
            speed: 800
        });

        // Otomatik geçiş için fonksiyon
        function autoSlide() {
            $(slider).slick('slickNext');
        }

        // Otomatik geçiş aralığı (milisaniye cinsinden)
        var interval = 5000; // Örneğin, 5000 milisaniye (5 saniye)

        // setInterval ile otomatik geçiş fonksiyonunu belirtilen aralıkta çağırma
        var autoSlideInterval = setInterval(autoSlide, interval);

        // Mouse üzerine gelindiğinde otomatik geçişi durdurma
        $(slider).mouseenter(function() {
            clearInterval(autoSlideInterval);
        });

        // Mouse ayrıldığında otomatik geçişi tekrar başlatma
        $(slider).mouseleave(function() {
            autoSlideInterval = setInterval(autoSlide, interval);
        });
    } else {
        console.error("Slider element not found.");
    }
});
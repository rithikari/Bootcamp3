document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = document.querySelector("#imageCarousel");
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Auto-slide every 3 seconds
        wrap: true
    });
});

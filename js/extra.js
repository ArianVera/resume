    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("year").innerHTML = year;
    $(document).ready(function(){
        $("#slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: false,
            autoplaySpeed: 100,
            items: 1,
            dots: false
        });
    });

$(document).ready(function () {
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true
    });
    $('.review-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true
    });
    $('.product-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        // autoplay: true,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            550: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.brand-slider').owlCarousel({
        loop: true,
        items: 3,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            550: {
                items: 3
            },

        }
    });

    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        // $("#content div.sp div a h4").filter(function() {
        // $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        // });
         var products = dataProduct.filter(x => (x?.name?.toLowerCase().indexOf(value)) > -1);
         hienthi(products);
    });

});
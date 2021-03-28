$('.active-slide').owlCarousel({
    loop:true,
    center:false,
    margin:10,
    nav:true,
    dots:true,
    dotsEach:3/true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('header .main_menu').meanmenu({
    meanMenuContainer: '.main_area',
    meanScreenWidth: 768,
    meanRevealPosition: 'left',
});
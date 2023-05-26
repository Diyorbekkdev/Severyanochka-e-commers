$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        560:{
            item: 2
        },
        768:{
            items:3
        },
        1000:{
            items: 4
        }
    }
})

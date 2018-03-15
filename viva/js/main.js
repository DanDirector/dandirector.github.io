$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1800:{
            items:5
        }
    }})

  $('#toggle').click(function() {
   $(this).toggleClass('active');
   // $('.menu').toggleClass('open');
   $('.menu').toggle();
  });

});



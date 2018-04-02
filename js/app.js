
$(window).on('scroll', function(){

  let scrollActual = $(window).scrollTop();

  $('.reveal').each(function(){

    let profundidad = $(this).offset().top - $(window).innerHeight()/1.6;
    // console.log(profundidad);
    if (scrollActual > profundidad) {
      $(this).addClass('visible');
    }
    else{
      $(this).removeClass('visible');
    }
  });
});


$(document).ready(function(){

  $('.menu').on('click', function(){

    let dataId = $(this).data('id'), objetivoPixels = $(dataId).offset().top;

    $('html').animate({
      scrollTop: objetivoPixels
    },1000);

  });

});

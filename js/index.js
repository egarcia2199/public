$(document).ready(function() {
    var altura = $('#menurrss').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('nav').addClass('nav-fixed');
        } else {
            $('nav').removeClass('nav-fixed');
        }
    });
});


window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };


$(document).ready(function() {

  $('.nav-button').on("click", function() {
    $(this).hide();
    $('.brand').fadeIn(500);
    $('.menu-layer').fadeIn(500);
    $('.header-strip').addClass('black').removeClass('white');
    $('.close-button').show();
  })

  $('.close-button').on("click", function() {
    $(this).hide();
    $('.menu-layer').fadeOut(500);
    $('.nav-button').show();
  })
})

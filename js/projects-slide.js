$(document).ready(function() {
  $('.flickity-slider').flickity({
    autoPlay: false,
    freeScroll: false,
    pageDots: false,
    wrapAround: false
  });

  checkForChanges();

  function checkForChanges() {
    if ($('.is-selected').data("id") > 0) {
      $('.project-slide-counter').show();
      $('.project-slide-counter span').html($('.is-selected').data("id") + "/" + ($('.project-slide').length-1));
      if ($('.is-selected video').length > 0) {
        $('.is-selected video').get(0).play();
      }
      setTimeout(checkForChanges, 300);
    } else {
      $('.project-slide-counter').hide();
      setTimeout(checkForChanges, 300);
    }
  }
})

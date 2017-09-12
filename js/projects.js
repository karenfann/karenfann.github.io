$(document).ready(function() {
  var projectsTop = $('.projects').offset().top;
  $(document).on("scroll", function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > projectsTop) $('.brand').fadeOut(300, "swing")
    else $('.brand').fadeIn(500);
  })
})

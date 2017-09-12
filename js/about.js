$(document).ready(function() {
  var aboutTop = $('.about').offset().top;
  var skillsTop = $('.skills').offset().top;
  var careerTop = $('.career').offset().top;
  var projectsTop = $('.projects').offset().top;
  var contactTop = $('.contact').offset().top;
  $(document).on("scroll", function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > aboutTop) $('.brand').fadeOut(300, "swing")
    else $('.brand').fadeIn(500);
    if (scrollPos < skillsTop) {
      $('.header-strip').addClass('black').removeClass('white');
      $('.section-button').hide();
      $('.about-button').show();
    }
    if (scrollPos >= skillsTop) {
      $('.header-strip').addClass('white').removeClass('black');
      $('.section-button').hide();
      $('.skills-button').show();
    }
    if (scrollPos >= careerTop) {
      $('.header-strip').addClass('black').removeClass('white');
      $('.section-button').hide();
      $('.career-button').show();
    }
    if (scrollPos >= projectsTop) {
      $('.header-strip').addClass('black').removeClass('white');
      $('.section-button').hide();
      $('.projects-button').show();
    }
    if (scrollPos >= contactTop) {
      $('.header-strip').addClass('white').removeClass('black');
      $('.section-button').hide();
      $('.contact-button').show();
    }
  })
  $('.skill-title').on("mouseover", function() {
    var levels = '#' + $(this).data('id');
    $(levels).toggle("slide");
  }).on("mouseleave", function() {
    var levels = '#' + $(this).data('id');
    $(levels).toggle("slide");
  })
})

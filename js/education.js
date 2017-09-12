$(document).ready(function() {

  /* fade brand on scroll*/
  var educationTop = $('.education').offset().top;

  var items = document.querySelectorAll(".timeline li");
  callbackFunc();

  $(document).on("scroll", function() {
    callbackFunc();
    var scrollPos = $(document).scrollTop();
    if (scrollPos > educationTop) $('.brand').fadeOut(300, "swing")
    else $('.brand').fadeIn(500);
  })

  /* slide courses in place */
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
})

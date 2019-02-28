$(document).ready(function() {
  $('body').scrollspy({
    target: ".navbar",
    offset: 50
  });
  $("#top-nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function() {
        window.location.hash = hash;
      });
    }
  });
});

/* Hide top-nav when user scrolls down and show top-nav when user scrolls up */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}

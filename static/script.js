$(document).ready(() => {
  // Title animation
  $("#title").css("opacity", "1");
  $(".navigation").css("opacity", "1");
  

  // Navbar toggle
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });
  $('nav ul li a').click(function() {
    if ($('body').width() <= 769) {
      $('#nav-toggle').removeClass('active');
      $('nav ul').slideToggle();
    }
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
  });


  // Enable fullpage.js
  $("#fullpage").fullpage({
    licenseKey: "6565F2B8-BA0F41C3-BC8C06A0-1D42DA81",
    anchors: ["main", "about", "projects", "contact"],
    autoScrolling: true,
    scrollHorizontally: false,
    sectionsColor: ["#FC7753", "grey", "blue", "blue"],
    scrollingSpeed: 1200
  });
  $.fn.fullpage.setAllowScrolling(true);
});

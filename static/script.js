$(document).ready(() => {
  // Hide splash screen and animate appearance
  setTimeout(() => { $(".center-page").css("opacity", "100").css("top", "-10vh") }, 500);
  $("#loader").css("opacity", "0");
  $("#loader").css("display", "none");
  setTimeout(() => { $(".navigation").css("opacity", "100") }, 1200);

  // Navbar toggle open and close nav styles on click
  $("#nav-toggle").click(function() {
    $("nav ul").slideToggle();
  });
  $("nav ul li a").click(function() {
    if ($("body").width() <= 769) {
      $("#nav-toggle").removeClass("active");
      $("nav ul").slideToggle();
    }
  });
  $("#nav-toggle").on("click", function() {
    this.classList.toggle("active");
  });

  // Homepage animation on click
  homeDisappear = () => {
    $("#home").addClass("disappearBg");
    $("#header, .navigation").addClass("disappear");
  };
  homeAppear = () => {
    $("#home").removeClass("disappearBg");
    setTimeout(() => {
      $("#header, .navigation").removeClass("disappear");
    }, 100);
  };
  $(".text-hover,.learn-more").click(function() {
    homeDisappear();
  });
  $("#home-btn-nav").click(function() {
    homeAppear();
  });

  // Homepage scroll animation
  animateHome = (e, currentPage) => {
    if (e.originalEvent.wheelDelta < 0 && currentPage == "home") {
      homeDisappear();
    } else if (e.originalEvent.wheelDelta > 0 && currentPage == "about") {
      homeAppear();
    }
  };
  $("#home").bind("mousewheel", e => {
    animateHome(e, "home");
  });
  $("#about-section").bind("mousewheel", e => {
    animateHome(e, "about");
  });

  // Enable fullpage.js
  $("#fullpage").fullpage({
    licenseKey: "6565F2B8-BA0F41C3-BC8C06A0-1D42DA81",
    anchors: ["main", "about", "projects", "contact"],
    autoScrolling: true,
    scrollHorizontally: false,
    sectionsColor: ["#FC7753", "grey", "blue", "blue"],
    scrollingSpeed: 1500
  });
  $.fn.fullpage.setAllowScrolling(true);
});
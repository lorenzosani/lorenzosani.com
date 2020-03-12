$(document).ready(() => {

  let sections = ["main", "about", "projects", "contact"]

  let d = new Date();
  let lastScroll = d.getTime();

  // Hide splash screen and animate appearance
  setTimeout(() => { $(".center-page").css("opacity", "100").css("top", "-10vh") }, 500);
  $("#loader").css("opacity", "0");
  $("#loader").css("display", "none");
  setTimeout(() => { $(".navigation, #scroll a span").css("opacity", "100") }, 2000);

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

  // Sections appear and disappear animation
  homeDisappear = () => {
      $("#home").addClass("disappearBg");
      $("#header, .navigation").addClass("disappear");
      setTimeout(() => { $(".image #front").css("bottom", 0)},600);
  };
  homeAppear = () => {
    $(".image #front").css("bottom", "-80px");
    $("#home").removeClass("disappearBg");
    setTimeout(() => {
      $("#header, .navigation").removeClass("disappear");
    }, 100);
  };
  aboutAppear = () => {
    setTimeout(() => {
      $("#nav-about").css("bottom", "50px").css("opacity", 1);
    }, 1200);
  }
  aboutDisappear = () => {
    $("#nav-about").css("bottom", "25px").css("opacity", 0);
  }

  // Mouse wheel scroll animation
  $("#home, #about-section, #projects-section, #contact-section").bind("mousewheel", e => {
    let d = new Date();
    if (d.getTime()-lastScroll > 1000){
      getScroll(e, fullpage_api.getActiveSection());
      let d = new Date();
      lastScroll = d.getTime();
    }
  });
  getScroll = (e, from) => {
    if (e.originalEvent.wheelDelta < 0) {
      animateSection(sections[from["index"]], sections[from["index"]+1]);
    } else if (e.originalEvent.wheelDelta > 0) {
      animateSection(sections[from["index"]], sections[from["index"]-1]);
    }
  }

  // Animates transitions from one section to other
  animateSection = (from, to) => {
    // Home animation
    if (from == "main") {
      homeDisappear();
    } else if (to == "main") {
      homeAppear();
    }
    // About animation
    if (to == "about") {
      aboutAppear();
    } else if (from == "about") {
      aboutDisappear();
    }
    fullpage_api.moveTo(to, 0);
  }  

  // Enable fullpage.js
  $("#fullpage").fullpage({
    licenseKey: "6565F2B8-BA0F41C3-BC8C06A0-1D42DA81",
    anchors: sections,
    autoScrolling: true,
    scrollHorizontally: false,
    sectionsColor: ["#fc7753", "grey", "blue", "blue"],
    scrollingSpeed: 1500
  });
});

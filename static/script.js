$(document).ready(() => {

  // Stars background to move with mouse
  let firstMove = true;
  let initialX, initialY;
  $("#home").mousemove(function(e) {
    parallaxIt(e, "#home-back", 10);
    parallaxIt(e, "#home-middle", 30);
    parallaxIt(e, "#home-front", 20);
  });
  
  parallaxIt = (e, target, movement) => {
    if (firstMove) {
      firstMove = false;
      initialX = e.pageX;
      initialY = e.pageY;
    }
    var x = (initialX - e.pageX)/movement;
    var y = (initialY - e.pageY)/movement;
    var command = "translate(" + x + "px, " + y + "px)";
    setTimeout(() => {
      $(target).css("transform", command);
    }, 50);
  }

  let sections = ["main", "about", "projects", "contact"];

  let d = new Date();
  let lastScroll = d.getTime();

  // Hide splash screen and animate appearance
  setTimeout(() => {
    $(".center-page")
      .css("opacity", "100")
      .css("top", "-10vh");
  }, 500);
  $("#loader").css("opacity", "0");
  $("#loader").css("display", "none");
  setTimeout(() => {
    $(".navigation, #scroll a span").css("opacity", "100");
  }, 2000);

  // Navbar toggle open and close nav styles on click
  let nav = $(".nav-toggle");
  nav.click(() => {
    $(".nav-list").slideToggle();
    if (nav.hasClass("active")) {
      nav.removeClass("active");
    } else {
      nav.addClass("active");
    }
  });
  $(".nav-list li a").click(() => {
    if ($("body").width() <= 769) {
      nav.removeClass("active");
      $("nav ul").slideToggle();
    }
  });

  // Sections appear and disappear animation
  homeDisappear = () => {
    $("#home").addClass("disappearBg");
    $("#header").addClass("disappear");
  };
  homeAppear = () => {
    $("#home").removeClass("disappearBg");
    setTimeout(() => {
      $("#header").removeClass("disappear");
    }, 100);
  };
  aboutAppear = () => {
    setTimeout(() => {
      $(".image #front").css("bottom", 0);
    }, 600);
    setTimeout(() => {
      $("#nav-about")
        .css("top", "0")
        .css("opacity", 1);
    }, 1200);
  };
  aboutDisappear = () => {
    $(".image #front").css("bottom", "-50px");
    $("#nav-about")
      .css("top", "-10px")
      .css("opacity", 0);
  };
  projectsAppear = () => {
    setTimeout(() => {
      $("#nav-projects")
        .css("top", "0")
        .css("opacity", 1);
    }, 1200);
  };
  projectsDisappear = () => {
    $("#nav-projects")
      .css("top", "-10px")
      .css("opacity", 0);
  };

  // Mouse wheel scroll animation
  $("#home, #about-section, #projects-section, #contact-section").bind(
    "mousewheel",
    e => {
      let d = new Date();
      if (d.getTime() - lastScroll > 1000) {
        getScroll(e, fullpage_api.getActiveSection());
        let d = new Date();
        lastScroll = d.getTime();
      }
    }
  );
  getScroll = (e, from) => {
    if (e.originalEvent.wheelDelta < 0) {
      animateSection(sections[from["index"]], sections[from["index"] + 1]);
    } else if (e.originalEvent.wheelDelta > 0 && from["index"] > 0) {
      animateSection(sections[from["index"]], sections[from["index"] - 1]);
    }
  };
  
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

    // Projects animation
    if (to == "projects") {
      projectsAppear();
    } else if (from == "projects") {
      projectsDisappear();
    }
    fullpage_api.moveTo(to, 0);
  };

  // Enable fullpage.js
  $("#fullpage").fullpage({
    licenseKey: "6565F2B8-BA0F41C3-BC8C06A0-1D42DA81",
    anchors: sections,
    autoScrolling: true,
    scrollHorizontally: false,
    sectionsColor: ["#fc7753", "#00335d", "blue", "blue"],
    scrollingSpeed: 1500
  });
});

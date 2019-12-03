$(document).ready(() => {
  $("#title").css("opacity", "1");

  //Enable fullpage.js
  $("#fullpage").fullpage({
    licenseKey: "6565F2B8-BA0F41C3-BC8C06A0-1D42DA81",
    anchors: ["main", "about", "projects", "contact"],
    autoScrolling: true,
    scrollHorizontally: false,
    sectionsColor: ["red", "grey", "blue", "blue"],
    scrollingSpeed: 1200
  });
  $.fn.fullpage.setAllowScrolling(true);
});

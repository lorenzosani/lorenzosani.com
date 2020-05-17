$(document).ready(() => { 
  $.ajax({
      url: "/sections/about",
      success: response => {
          $("#about-section").html(response)
      },
      error: response => {
        console.log(response);
      }
  });
  $.ajax({
    url: "/sections/projects",
    success: response => {
        $("#projects-section").html(response)
    },
    error: response => {
      console.log(response);
    }
  });
  $.ajax({
    url: "/sections/contact",
    success: response => {
        $("#contact-section").html(response)
    },
    error: response => {
      console.log(response);
    }
  });
})

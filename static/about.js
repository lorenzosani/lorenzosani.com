$(document).ready(() => { 
    $.ajax({
        url: "/about",
        success: response => {
            $("#about-section").html(response)
        },
        error: response => {
          console.log(response);
        }
      });
})
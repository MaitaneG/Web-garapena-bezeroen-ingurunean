/*$(document).ready(function () {
  $("#clickme").click(function () {
    $("#book").animate(
      {
        opacity: 0.25,
        left: "+=500",
        height: "toggle",
      },
      5000,
      function () {
        // Animation complete.
      }
    );
  });
});*/

$( "#clickme" ).click(function() {
    $( "#book" ).animate({
      width: [ "toggle", "swing" ],
      height: [ "toggle", "swing" ],
      opacity: "toggle"
    }, 5000, "linear", function() {
      $( this ).after( "<div>Animation complete.</div>" );
    });
  });

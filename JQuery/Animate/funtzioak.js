$(document).ready(function () {
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
});

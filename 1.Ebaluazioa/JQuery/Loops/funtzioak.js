$(document).ready(function () {
    $("p").each(function (i) {
      if (i % 2 == 0) {
        $(this).css("background-color", "#eee");
      } else {
        $(this).css("background-color", "#ccc");
      }
    });
    $("input:submit").click(function () {
      $("#bat").append("<p>Otro mas</p>");
    });
  });
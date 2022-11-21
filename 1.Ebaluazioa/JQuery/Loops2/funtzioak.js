$(document).ready(function () {
    $("div").each(function (i) {
      elemento = $(this);
      if (elemento.html() == "white") return true;
      if (elemento.html() == "nada") return true;
      elemento.css("color", elemento.html());
    });
  });
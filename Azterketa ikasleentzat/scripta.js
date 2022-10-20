$(document).ready(function () {
  $("#form").hide();

  $("#header").click(function () {
    $(this).animate(
      {
        height: ["toggle", "swing"],
        opacity: "toggle",
      },
      2000,
      "linear"
    );
  });

  $("#ikusi").click(function (e) {
    e.preventDefault();
    var herrialdea = $("#herrialdea option:selected").html();
    if (herrialdea != "Aukeratu") {
      $.ajax({
        type: "GET",
        url: "cookpad.json",
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].herrialdea == herrialdea) {
              var errezetak = data[i].errezetak;
              for (var j = 0; j < errezetak.length; j++) {
                var irudia = document.createElement("img");
                irudia.src = errezetak[j].izena;
                document.body.appendChild(irudia);
              }
            }
          }
        },
      });
    } else {
        alert("Herrialdea aukeratu behar duzu");
      e.stopPropagation();
    }
  });

  $("#gehitu").click(function () {
    $("#form").toggle();
    $("#formulario").addClass("was-validated");
    $("#form-gehitu").on("submit", function (e) {
        
      e.preventDefault();
      if (this.checkValidity()) {
        $("#formulario").removeClass("was-validated");
      } else {
        e.stopPropagation();
      }
    });
  });
});

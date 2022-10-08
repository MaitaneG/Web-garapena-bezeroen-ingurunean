$(document).ready(function () {
  $(".needs-validation").on("submit", gehitu);
  $("#erosi").click(erosten);
});

function gehitu(e) {
  e.preventDefault();
  $(this).addClass('was-validated');

  if (this.checkValidity()) {
    $("ul").append("<li>" + $("#gehitzekoa").val() + "</li>");
    $("#gehitzekoa").val("");
  }else{
    
    e.stopPropagation();
  }
}

function erosten(e) {
  $("#erosketa").css("background-color", "green");
  $("#erosketa").css("color", "white");
  $("button").attr('disabled', true);
  alert("Zure erosketa listo dago");
}

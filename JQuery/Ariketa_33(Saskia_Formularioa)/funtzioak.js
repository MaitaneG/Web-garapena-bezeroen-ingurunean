$(document).ready(function () {
  $("#formularioa").on("submit", gehitu);
  $("#erosi").click(erosten);
});

function gehitu(e) {
  $("#erosketa").css("background-color", "white");
  $("#erosketa").css("color", "black");
  if (this.checkValidity()) {
    $("ul").append("<li>" + $("#gehitzekoa").val() + "</li>");
    e.preventDefault();
    e.stopPropagation();
    $("#gehitzekoa").val("");
  }
}

function erosten(e) {
  $("#erosketa").css("background-color", "green");
  $("#erosketa").css("color", "white");
  alert("Zure erosketa listo dago");
  e.preventDefault();
  e.stopPropagation();
}

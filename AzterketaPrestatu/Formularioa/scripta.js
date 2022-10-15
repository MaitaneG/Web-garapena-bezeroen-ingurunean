window.onload = function () {
  let botoia = document.getElementById("botoia");
  botoia.addEventListener("click", function () {
    let erabiltzailea = document.getElementById("erabiltzailea");
    let pasahitza = document.getElementById("pasahitza");
    let p = document.getElementById("text");
    let tbody = document.getElementById("taula");

    p.innerHTML= erabiltzailea.value + " " + pasahitza.value
    var row = tbody.insertRow(tbody.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = erabiltzailea.value;
    cell2.innerHTML = pasahitza.value;
  });
};

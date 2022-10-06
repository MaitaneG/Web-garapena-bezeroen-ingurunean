var argazkiak = [
  "img/saludo1.jpg",
  "img/saludo2.jpg",
  "img/saludo3.jpg",
  "img/saludo4.jpg",
];

window.onload = function () {
  document
    .getElementById("argIgo")
    .addEventListener("click", ateraArgazkia, false);
};

function ateraArgazkia() {
  var argazki = document.getElementsByTagName("img");

  if (argazki.length < 4) {
    var irudia = document.createElement("img");
    irudia.src = argazkiak[0];
    irudia.addEventListener("dblclick", argazkiaEzabatu, false);
    document.body.appendChild(irudia);
    argazkiak.shift();
  } else {
    alert("Ezin duzu argazki gehiago gehitu");
  }
}

function argazkiaEzabatu() {
  argazkiak.push(this.src)
  document.body.removeChild(this);
}

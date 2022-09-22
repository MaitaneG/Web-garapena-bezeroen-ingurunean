function bidali() {
  let radioAnderea = document.getElementById("anderea");

  if (radioAnderea.checked) {
    let gender = "Jauna";
  } else {
    let gender = "anderea";
  }

  let izena = document.getElementById("izena");
  let abizena = document.getElementById("abizena");
  let helbidea = document.getElementById("helbidea");
  let herrialdea = document.getElementById("herrialdea");

  if (
    izena.value.trim() == "" ||
    abizena.value.trim() == "" ||
    helbidea.value.trim() == "" ||
    herrialdea.value.trim() == ""
  ) {
    alert("Datu guztiak bete behar dira");
  } else {
    let izenaIda = document.getElementById("sartuIzena");
    let abizenaIda = document.getElementById("sartuAbizena");
    let helbideaIda = document.getElementById("sartuHelbidea");
    let herrialdeaIda = document.getElementById("sartuHerrialdea");

    izenaIda.textContent = izena.value.trim();
    abizenaIda.textContent = abizena.value.trim();
    helbideaIda.textContent = helbidea.value.trim();
    herrialdeaIda.textContent = herrialdea.value.trim();
  }
  return false;
}

function ezeztatu() {
  let argazkia = document.getElementById("arg");
  let radioJauna = document.getElementById("jauna");
  let radioAnderea = document.getElementById("anderea");
}

function argazkiaAldatu() {
  let argazkia = document.getElementById("arg");
  let radioJauna = document.getElementById("jauna");
  let radioAnderea = document.getElementById("anderea");

  radioJauna.onclick = function () {
    argazkia.src = "img/caraHombre.jpg";
  };

  radioAnderea.onclick = function () {
    argazkia.src = "img/caraMujer.jpg";
  };
}

function bidaliInfor() {
  ezabatu();

  let radioAnderea = document.getElementById("anderea");

  let gender = "Jauna";

  if (radioAnderea.checked) {
    gender = "Anderea";
  }

  let izena = document.getElementById("izena");
  let abizena = document.getElementById("abizena");
  let helbidea = document.getElementById("helbidea");
  let herrialdea = document.getElementById("herrialdea");
  let liburuak = document.getElementById("liburuak");
  let pelikulak = document.getElementById("pelikulak");

  if (
    izena.value.trim() == "" ||
    abizena.value.trim() == "" ||
    helbidea.value.trim() == "" ||
    herrialdea.value.trim() == ""
  ) {
    alert("Datu guztiak bete behar dira");
  } else if (liburuak.checked || pelikulak.checked) {
    let izenaIda = document.getElementById("sartuIzena");
    let abizenaIda = document.getElementById("sartuAbizena");
    let helbideaIda = document.getElementById("sartuHelbidea");
    let herrialdeaIda = document.getElementById("sartuHerrialdea");
    let generoaIda = document.getElementById("sartuGeneroa");

    let gustokoenaIda = document.getElementById("sartuGustokoena");

    if (liburuak.checked && pelikulak.checked) {
      gustokoenaIda.textContent = "Gustokoenak: Liburuak eta Pelikulak";
    } else if (liburuak.checked) {
      gustokoenaIda.textContent = "Gustokoena: Liburuak";
    } else {
      gustokoenaIda.textContent = "Gustokoena: Pelikulak";
    }

    izenaIda.textContent = "Izena: " + izena.value.trim();
    abizenaIda.textContent = "Abizena: " + abizena.value.trim();
    helbideaIda.textContent = "Helbidea: " + helbidea.value.trim();
    herrialdeaIda.textContent = "Herrialdea: " + herrialdea.value.trim();
    generoaIda.textContent = "Generoa: " + gender;
  } else {
    alert("Gutxienez gustoko bat aukeratu behar duzu.");
  }
  return false;
}

function ezabatu() {
  let izenaIda = document.getElementById("sartuIzena");
  let abizenaIda = document.getElementById("sartuAbizena");
  let helbideaIda = document.getElementById("sartuHelbidea");
  let herrialdeaIda = document.getElementById("sartuHerrialdea");
  let generoaIda = document.getElementById("sartuGeneroa");
  let gustokoenaIda = document.getElementById("sartuGustokoena");

  izenaIda.textContent="";
  abizenaIda.textContent="";
  helbideaIda.textContent="";
  herrialdeaIda.textContent="";
  generoaIda.textContent="";
  gustokoenaIda.textContent="";
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

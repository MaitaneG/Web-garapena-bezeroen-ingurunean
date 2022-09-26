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
  let probintzia = document.getElementById("probintzia");
  let liburuak = document.getElementById("liburuak");
  let pelikulak = document.getElementById("pelikulak");

  if (
    izena.value.trim() == "" ||
    abizena.value.trim() == "" ||
    helbidea.value.trim() == "" 
  ) {
    alert("Datu guztiak bete behar dira");
  } else if (liburuak.checked || pelikulak.checked) {
    let izenaIda = document.getElementById("sartuIzena");
    let abizenaIda = document.getElementById("sartuAbizena");
    let helbideaIda = document.getElementById("sartuHelbidea");
    let probintziaIda = document.getElementById("sartuProbintzia");
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
    probintziaIda.textContent = "Probintzia: " + probintzia.value.trim();
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
  let probintziaIda = document.getElementById("sartuProbintzia");
  let generoaIda = document.getElementById("sartuGeneroa");
  let gustokoenaIda = document.getElementById("sartuGustokoena");

  izenaIda.textContent="";
  abizenaIda.textContent="";
  helbideaIda.textContent="";
  generoaIda.textContent="";
  gustokoenaIda.textContent="";
  probintziaIda.textContent="";
}

function aldatuJauna(){
  let argazkia = document.getElementById("arg");
  argazkia.src = "img/caraHombre.jpg";
}

function aldatuAnderea(){
  let argazkia = document.getElementById("arg");
  argazkia.src = "img/caraMujer.jpg";
}
function pasahitzaEskatu() {
  let pasahitzaOndo = false;
  while (!pasahitzaOndo) {
    pasahitzaOndo = pasahitzakKonprobatu();
  }
}

function pasahitzakKonprobatu() {
  let pasahitza1 = prompt("Pasahitza sartu");
  let pasahitza2 = prompt("Pasahitza berriro sartu");

  if (pasahitza1 == pasahitza2) {
    alert("Ongi etorri");
    return true;
  } else {
    alert("Pasahitza okerrra");
    return false;
  }
}

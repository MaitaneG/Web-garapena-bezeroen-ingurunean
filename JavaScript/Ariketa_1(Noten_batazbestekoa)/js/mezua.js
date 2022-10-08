function notakEskatu() {
  let nota1 = prompt("Lehengo nota sartu");
  let nota2 = prompt("Bigarren nota sartu");
  let nota3 = prompt("Hirugarren nota sartu");
  return batazbestekoaKalkulatu(nota1, nota2, nota3);
}

function batazbestekoaKalkulatu(notak1, notak2, notak3) {
  let batazbestekoa = (parseInt(notak1) + parseInt(notak2) + parseInt(notak3)) / 3;
  if (batazbestekoa >= 5) {
    return "Gaindituta";
  } else {
    return "Suspendiduta";
  }
}

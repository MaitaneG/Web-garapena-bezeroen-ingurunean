function faktorialaKalkulatu() {
  let zenbakia = 0;

  do {
    zenbakia = parseInt(prompt("Zer zenbakiren faktoriala nahi duzu? "));
  } while (isNaN(zenbakia) || Number(zenbakia) < 0);

  let faktoriala = 1;

  for (var i = 1; i <= zenbakia; i++) {
    faktoriala = faktoriala * i;
  }

  alert(zenbakia + "-ren faktoriala da: " + faktoriala);
}

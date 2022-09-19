function faktorialaKalkulatu() {
  let zenbakia = "a";

  while (isNaN(zenbakia)) {
    zenbakia = parseInt(prompt("Zer zenbakiren faktoriala nahi duzu? "));
  }

  let faktoriala = 1;

  for (var i = 1; i <= zenbakia; i++) {
    faktoriala = faktoriala * i;
  }

  alert(zenbakia + "-ren faktoriala da: " + faktoriala);
}

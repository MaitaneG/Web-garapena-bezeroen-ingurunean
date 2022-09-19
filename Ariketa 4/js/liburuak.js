function liburuakBistaratu() {
  let liburuak = new Array();
  liburuak.push(new Liburua("La edad de la ira", "Nando Lopez", true));
  liburuak.push(new Liburua("Violeta", "Isabel Allende", false));

  for (var i =0;i<liburuak.length();i++){
    
    
    alert(
        "Liburuaren izena: " +
          liburuak[i] +
          ", autorea: " +
          liburuak[i].autorea +
          ", irakurrita: " +
          irakurrita
      );
  }
  /* */
}

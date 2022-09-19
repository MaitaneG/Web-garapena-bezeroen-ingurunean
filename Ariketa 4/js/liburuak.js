function liburuakBistaratu() {
  let liburu1={tituloa: "La edad de la ira", autorea: "Nando Lopez", irakurrita:true};
  
  let liburu2={tituloa: "Violeta", autorea: "Isabel Allende", irakurrita:false};

  let liburuak = new Array();
  liburuak.push(liburu1);
  liburuak.push(liburu2);

  for (var i =0;i<liburuak.length;i++){
    if(liburuak[i].irakurrita==true){
      alert("Liburu hau irakurrita daukazu: "+
          liburuak[i].tituloa + " - " +
          liburuak[i].autorea );
    }else{
      alert("Liburu hau irakurri behar duzu: "+
      liburuak[i].tituloa + " - " +
      liburuak[i].autorea );
    }
  }
}

function aurrera(){
    let linkAurrera = document.getElementById("aurrera");
    linkAurrera.onclick = function(){
        let kamisetaZbk= document.getElementById("kamisetaZbk");
        let argazkia=document.getElementById("argazkia")

        if(kamisetaZbk.textContent == "Camiseta 6"){
            kamisetaZbk.textContent= "Camiseta 9";
            argazkia="img/9jpg"
        }else if(kamisetaZbk.textContent == "Camiseta 9"){
            kamisetaZbk.textContent= "Camiseta 11";
            argazkia="img/11jpg"
        }else{
            kamisetaZbk.textContent= "Camiseta 6";
            argazkia="img/6jpg"
        }
    }
}

function atzera(){

}
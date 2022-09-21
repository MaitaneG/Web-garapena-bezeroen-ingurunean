function aurrera(){
    let linkAurrera = document.getElementById("aurrera");
    linkAurrera.onclick = function(){
        let kamisetaZbk= document.getElementById("kamisetaZbk");

        if(kamisetaZbk.textContent == "Camiseta 6"){
            kamisetaZbk.textContent= "Camiseta 9";
        }else if(kamisetaZbk.textContent == "Camiseta 9"){
            kamisetaZbk.textContent= "Camiseta 11";
        }else{
            kamisetaZbk.textContent= "Camiseta 6";
        }
    }
}

function atzera(){

}
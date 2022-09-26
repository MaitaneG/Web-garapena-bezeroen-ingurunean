function aurrera(){
    let linkAurrera = document.getElementById("aurrera");
    linkAurrera.onclick = function(){
        let kamisetaZbk= document.getElementById("kamisetaZbk");
        let argazkia=document.getElementById("argazkia")

        if(kamisetaZbk.textContent == "Camiseta 6"){
            kamisetaZbk.textContent= "Camiseta 9";
            argazkia.src="img/9.jpg"
        }else if(kamisetaZbk.textContent == "Camiseta 9"){
            kamisetaZbk.textContent= "Camiseta 11";
            argazkia.src="img/11.jpg"
        }else{
            kamisetaZbk.textContent= "Camiseta 6";
            argazkia.src="img/6.jpg"
        }
    }
}

function atzera(){
    let linkAurrera = document.getElementById("atzera");
    linkAurrera.onclick = function(){
        let kamisetaZbk= document.getElementById("kamisetaZbk");
        let argazkia=document.getElementById("argazkia")

        if(kamisetaZbk.textContent == "Camiseta 11"){
            kamisetaZbk.textContent= "Camiseta 9";
            argazkia.src="img/9.jpg"
        }else if(kamisetaZbk.textContent == "Camiseta 9"){
            kamisetaZbk.textContent= "Camiseta 6";
            argazkia.src="img/6.jpg"
        }else{
            kamisetaZbk.textContent= "Camiseta 11";
            argazkia.src="img/11.jpg"
        }
    }
}
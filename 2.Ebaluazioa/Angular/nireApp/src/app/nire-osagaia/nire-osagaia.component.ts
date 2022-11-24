import { Component } from '@angular/core';

@Component({
  selector: 'app-nire-osagaia',
  templateUrl: './nire-osagaia.component.html',
  styleUrls: ['./nire-osagaia.component.css']
})
export class NireOsagaiaComponent {
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: './assets/img/Vilma.jpg'
    };

    gehituLikes(langilea: any) { langilea.likes++; }

    langileak = [ 
      { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes:0, lanean:true }, 
      { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes:0, lanean:true }, 
      { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes:0, lanean:false }, 
      { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes:0, lanean:false, }, 
    ];

    Title="Langileen zerrenda"; getTitle() { 
      return this.Title; }

    rowLimit = 3;
    myText = "Nire izena: <h1>Izaskun</h1> da";
}

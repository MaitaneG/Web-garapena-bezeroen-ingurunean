import { Component, OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../interfaces/kluba';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  klubak: Kluba[] = [];
  showLoader: boolean;

  constructor(private klubaService: KlubaService) {
    this.showLoader = true;
  }

  getKlubak(): void{
    this.klubaService.getKlubak()
    .subscribe(data => {this.klubak = data; 
    this.showLoader=false},
    error => console.log('Error::' + error)); }

    ngOnInit(){
      this.getKlubak();
      }
}

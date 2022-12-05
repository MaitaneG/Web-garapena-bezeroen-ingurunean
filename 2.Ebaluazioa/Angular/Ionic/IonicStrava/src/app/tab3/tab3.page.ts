import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit{

  ionite = "Ben"
  constructor() { 
  }

  displayedColumns: string[] = ['first_name', 'last_name', 'twitter'];
  dataSource = new MatTableDataSource<any>([
    {
      first_name: 'Max',
      last_name: 'Lynch',
      twitter: 'maxlynch'
    },
    {
      first_name: 'Matt',
      last_name: 'Netkow',
      twitter: 'dotNetkow'
    },
    {
      first_name: 'Ben',
      last_name: 'Sperry',
      twitter: 'benjsperry'
    }
  ]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

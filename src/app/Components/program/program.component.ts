import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
  program: string;
  totalDocument: string;
  reviewedDocument: string;
  unreviewedDocument: string;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {program: 'Program A', totalDocument:'25', reviewedDocument:'20', unreviewedDocument:'5', details:'s'},
  {program: 'Program B', totalDocument:'15', reviewedDocument:'10', unreviewedDocument:'5', details:'s'},
  {program: 'Program C', totalDocument:'10', reviewedDocument:'5', unreviewedDocument:'5', details:'s'},
  {program: 'Program D', totalDocument:'15', reviewedDocument:'5', unreviewedDocument:'5', details:'s'},
  {program: 'Program E', totalDocument:'30', reviewedDocument:'10', unreviewedDocument:'5', details:'s'},
  {program: 'Program F', totalDocument:'20', reviewedDocument:'15', unreviewedDocument:'5', details:'s'},
  {program: 'Program G', totalDocument:'30', reviewedDocument:'10', unreviewedDocument:'5', details:'s'},
  {program: 'Program H', totalDocument:'15', reviewedDocument:'5', unreviewedDocument:'5', details:'s'},
  {program: 'Program I', totalDocument:'10', reviewedDocument:'5', unreviewedDocument:'5', details:'s'},
];

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  displayedColumns: string[] = ['program', 'totalDocument', 'reviewedDocument', 'unreviewedDocument', 'details'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(){

  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
    
  }
}

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  program: string;
  reviewer: string;
  filetype: string;
  source: string;
  documentType: string;
  reviewStatus: string;
  attachedTo: string;
  dateReceived: string;
  dateProcessed: string;
  docId: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {program: 'Program A', reviewer:'Rep A', filetype:'FAX', source:'Phone 876-555-4321', documentType:'EOB', reviewStatus: 'Approved', attachedTo:'Patient# 1234563', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1333', action:'s'},
  {program: 'Program B', reviewer:'Rep B', filetype:'PDF', source:'Upload', documentType:'EOB', reviewStatus: 'Approved', attachedTo:'Patient# 1234563', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1334', action:'s'},
  {program: 'Program C', reviewer:'Rep C', filetype:'PDF', source:'Upload', documentType:'FAX Consent', reviewStatus: 'Approved', attachedTo:'Patient# 1234563', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1335', action:'s'},
  {program: 'Program D', reviewer:'Rep D', filetype:'FAX', source:'Phone 876-555-4321', documentType:'EOB', reviewStatus: 'Not-Reviewed', attachedTo:'', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1336', action:'s'},
  {program: 'Program E', reviewer:'Rep E', filetype:'FAX', source:'Phone 876-555-4321', documentType:'EOB', reviewStatus: '', attachedTo:'Patient# 1234563', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1337', action:'s'},
  {program: 'Program F', reviewer:'Rep F', filetype:'FAX', source:'Upload', documentType:'EOB', reviewStatus: 'Rejected', attachedTo:'', dateReceived:'', dateProcessed:'03/03/2023 4:45 PM', docId:'1338', action:'s'},
  {program: 'Program G', reviewer:'Rep G', filetype:'PDF', source:'Upload', documentType:'EOB', reviewStatus: 'Yes', attachedTo:'', dateReceived:'', dateProcessed:'03/03/2023 4:45 PM', docId:'1339', action:'s'},
  {program: 'Program H', reviewer:'Rep H', filetype:'PDF', source:'Upload', documentType:'EOB', reviewStatus: 'Yes', attachedTo:'Patient# 1234563', dateReceived:'03/03/2023 4:45 PM', dateProcessed:'03/04/2023 9:00 AM', docId:'1333', action:'s'},
];

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  displayedColumns: string[] = ['program', 'reviewer', 'filetype', 'source', 'documentType','reviewStatus', 'attachedTo', 'dateReceived', 'dateProcessed', 'docId', 'action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(){

  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
    
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GuideTable } from '../model/guide.model';
import { GuidesService } from '../services/guides.service';

@Component({
  selector: 'app-available-guides',
  templateUrl: './available-guides.component.html',
  styleUrls: ['./available-guides.component.css']
})
export class AvailableGuidesComponent implements OnInit {

  search : String ="";
  columnsToDisplay: string[] = ['purchaseOrder', 'guideNumber', 'creationDate', 'expiration','dowloadFile'];
  dataSource: any
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private guidesService:GuidesService) { 
    
    guidesService.getAllGuidesAvailable().subscribe( resultado => {
      this.dataSource = new MatTableDataSource<GuideTable>(resultado);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {
  }

  dowloadFile(purchaseOrder: string) {
    console.log("descargar archivo: ", purchaseOrder)
  }

}
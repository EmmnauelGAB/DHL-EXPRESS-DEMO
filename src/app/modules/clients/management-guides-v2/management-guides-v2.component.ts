import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-management-guides-v2',
  templateUrl: './management-guides-v2.component.html',
  styleUrls: ['./management-guides-v2.component.css']
})
export class ManagementGuidesV2Component implements OnInit {


  search : String ="";
  displayedColumns: string[] = ['numeroGuia', 'odcAsociado', 'nombreContacto', 'remitente','destinatario', 'campo6', 'accion'];
  dataSource = new MatTableDataSource<Guide>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}



export interface Guide {
  numeroGuia: string;
  odcAsociado: string;
  nombreContacto: string;
  remitente: string;
  destinatario: string;
  campo6: string;
}

const ELEMENT_DATA: Guide[] = [
  {
    numeroGuia: '00001',
    odcAsociado: '00001',
    nombreContacto: 'Campo 3',
    remitente: 'Juan López',
    destinatario: 'Mariana Orozco',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00002',
    odcAsociado: '00002',
    nombreContacto: 'Campo 3',
    remitente: 'Chava Martinez',
    destinatario: 'Luis Juarez',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00003',
    odcAsociado: '00003',
    nombreContacto: 'Campo 3',
    remitente: 'Laura Alvarez',
    destinatario: 'Liz Díaz',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00004',
    odcAsociado: '00004',
    nombreContacto: 'Campo 3',
    remitente: 'Lorena Alan',
    destinatario: 'Hugo Gonzalez',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00005',
    odcAsociado: '00005',
    nombreContacto: 'Campo 3',
    remitente: 'Juan López',
    destinatario: 'Mariana Orozco',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00006',
    odcAsociado: '00006',
    nombreContacto: 'Campo 3',
    remitente: 'Chava Martinez',
    destinatario: 'Luis Juarez',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00007',
    odcAsociado: '00007',
    nombreContacto: 'Campo 3',
    remitente: 'Laura Alvarez',
    destinatario: 'Liz Díaz',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00008',
    odcAsociado: '00008',
    nombreContacto: 'Campo 3',
    remitente: 'Lorena Alan',
    destinatario: 'Hugo Gonzalez',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00009',
    odcAsociado: '00009',
    nombreContacto: 'Campo 3',
    remitente: 'Juan López',
    destinatario: 'Mariana Orozco',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00010',
    odcAsociado: '00010',
    nombreContacto: 'Campo 3',
    remitente: 'Chava Martinez',
    destinatario: 'Luis Juarez',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00011',
    odcAsociado: '00011',
    nombreContacto: 'Campo 3',
    remitente: 'Laura Alvarez',
    destinatario: 'Liz Díaz',
    campo6: 'campo6',
  },
  {
    numeroGuia: '00012',
    odcAsociado: '00012',
    nombreContacto: 'Campo 3',
    remitente: 'Lorena Alan',
    destinatario: 'Hugo Gonzalez',
    campo6: 'campo6',
  },
   
];

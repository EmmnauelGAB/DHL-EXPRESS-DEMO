import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-management-guides',
  templateUrl: './management-guides.component.html',
  styleUrls: ['./management-guides.component.css']
})
export class ManagementGuidesComponent implements OnInit {
 
  search : String ="";
  displayedColumns: string[] = ['folio', 'fechaCaducidad', 'totalGuias', 'guiasUsadas','guiasAsignadas', 'guiasDisponibles', 'accion'];
  dataSource = new MatTableDataSource<ODC>(ELEMENT_DATA);

  displayedColumns2: string[] = ['descripcion', 'guiasTotales', 'guiasAsignadasDisponibles', 'guiasAsignadasImpresas','guiasDisponiblesAsignar', 'guiasAsignar', 'guiasDesasignar'];
  dataSource2 = new MatTableDataSource<ProductosDisponibles>(ELEMENT_DATA2);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public viewTablaProductosDisponibles: boolean = false;
  public viewTablaODC: boolean = true;
  
  public ocultarTablaProductosDisponibles() {
    this.viewTablaProductosDisponibles = false;
    this.mostrarTablaODC();
  }

  public mostrarTablaProductosDisponibles() {
    this.viewTablaProductosDisponibles = true;
    this.ocultarTablaODC();
  }

  public ocultarTablaODC() {
    this.viewTablaODC = false;
  }

  public mostrarTablaODC() {
    this.viewTablaODC = true;
  }
}



export interface ODC {
  folio: string;
  fechaCaducidad: string;
  totalGuias: string;
  guiasUsadas: string;
  guiasAsignadas: string;
  guiasDisponibles: string;
}

const ELEMENT_DATA: ODC[] = [
  {
    folio: '10000990',
    fechaCaducidad: '31/12/2022',
    totalGuias: '100',
    guiasUsadas: '18',
    guiasAsignadas: '11',
    guiasDisponibles: '71',
  },
  {
    folio: '10000991',
    fechaCaducidad: '31/12/2022',
    totalGuias: '100',
    guiasUsadas: '18',
    guiasAsignadas: '11',
    guiasDisponibles: '71',
  },
  {
    folio: '10000992',
    fechaCaducidad: '31/12/2022',
    totalGuias: '100',
    guiasUsadas: '18',
    guiasAsignadas: '11',
    guiasDisponibles: '71',
  },
];

export interface ProductosDisponibles {
  descripcion: string;
  guiasTotales: string;
  guiasAsignadasDisponibles: string;
  guiasAsignadasImpresas: string;
  guiasDisponiblesAsignar: string;
}

const ELEMENT_DATA2: ProductosDisponibles[] = [
  {
    descripcion: 'Documento 1KG',
    guiasTotales: '100',
    guiasAsignadasDisponibles: '0',
    guiasAsignadasImpresas: '0',
    guiasDisponiblesAsignar: '71',
  },
  {
    descripcion: 'Documento 2KG',
    guiasTotales: '200',
    guiasAsignadasDisponibles: '2',
    guiasAsignadasImpresas: '3',
    guiasDisponiblesAsignar: '71',
  },
];



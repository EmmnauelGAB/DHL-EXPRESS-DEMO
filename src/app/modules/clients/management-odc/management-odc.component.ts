import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-management-odc',
  templateUrl: './management-odc.component.html',
  styleUrls: ['./management-odc.component.css']
})
export class ManagementOdcComponent implements OnInit {

  search : String ="";
  displayedColumns: string[] = ['rfc', 'razonSocial', 'nombreContacto', 'correoElectronico'];
  dataSource = new MatTableDataSource<Cliente>(ELEMENT_DATA);

  displayedColumns2: string[] = ['numeroGuias', 'precio'];
  dataSource2 = new MatTableDataSource<CapturaCotizacion>(ELEMENT_DATA2);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public viewTablaProductosDisponibles: boolean = false;
  public viewTablaCliente: boolean = false;
  public viewTablaCapturaCotizacion: boolean = false;

  public ocultarTablaProductosDisponibles() {
    this.viewTablaProductosDisponibles = false;
    this.ocultarTablaClientes();
  }

  public mostrarTablaProductosDisponibles() {
    this.viewTablaProductosDisponibles = true;
    this.ocultarTablaClientes();
  }

  public ocultarTablaClientes() {
    this.viewTablaCliente = false;
  }

  public mostrarTablaClientes() {
    this.viewTablaCliente = true;
  }


  public ocultarTablaCapturaCotizacion() {
    this.viewTablaCapturaCotizacion = false;
  }

  public mostrarTablaCapturaCotizacion() {
    this.viewTablaCapturaCotizacion = true;
  }
}



export interface Cliente {
  rfc: string;
  razonSocial: string;
  nombreContacto: string;
  correoElectronico: string; 
}

const ELEMENT_DATA: Cliente[] = [
  {
    rfc: 'GUMJ830302TU1',
    razonSocial: 'Juan Jose Gutierrez',
    nombreContacto: 'Juan Jose Gutierrez Mendoza',
    correoElectronico: 'juan.gutierrez@dhl.com',
  },
  
];

export interface CapturaCotizacion {
  precio: string;
}

const ELEMENT_DATA2: CapturaCotizacion[] = [
  {
    precio: '200',
  },
  
];


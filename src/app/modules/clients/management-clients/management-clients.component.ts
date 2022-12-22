import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-management-clients',
  templateUrl: './management-clients.component.html',
  styleUrls: ['./management-clients.component.css']
})
export class ManagementClientsComponent implements OnInit {
  search : String ="";
  displayedColumns: string[] = ['nombreEmpresa', 'paisRegion', 'direccion', 'nombreContacto','email', 'phone', 'accion'];
  dataSource = new MatTableDataSource<Client>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface Client {
  nombreEmpresa: string;
  paisRegion: string;
  direccion: string;
  nombreContacto: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: Client[] = [
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
  {
    nombreEmpresa: 'Praxis IT',
    paisRegion: 'México',
    direccion: 'Insurgentes Sur 4',
    nombreContacto: 'Carol Mtz',
    email: 'i.marinez@praxisglobe.net',
    phone: '55 27 58 23 12',
  },
   
];

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements AfterViewInit {


  search : String ="";
  displayedColumns: string[] = ['usuario', 'name', 'roles', 'estatus', 'fechaAl', 'ultimoIn', 'accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
   this.dialog.open(DialogContentExampleDialog, {width: '450px'});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

//PopUp Delete Usuario
@Component({
  selector: 'management.component-dialog',
  templateUrl: './management.component-dialog.html',
  styleUrls: ['./management.component.css']
})
export class DialogContentExampleDialog {

  constructor(public dialog: MatDialog) {}
  closeDialog(){
    this.dialog.closeAll();
  }

}

export interface PeriodicElement {
  usuario: string;
  name: string;
  roles: string;
  estatus: string;
  fechaAl: string;
  ultimoIn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    usuario: 'gerardo.miranda',
    name: 'Gerardo Miranda Herrera',
    roles: 'Administrador',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'usuario_new@miranda',
    name: 'Ernesto',
    roles: 'Cliente',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'o.cabrera@praxisglobe.net',
    name: 'Omar Cabrera Acero',
    roles: 'Cliente',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'emmanuel.garcia',
    name: 'Emmanuel Garcia Barron',
    roles: 'Administrador',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'Juan.miranda',
    name: 'juan Miranda Herrera',
    roles: 'Cliente',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'clau.miranda',
    name: 'Claudia',
    roles: 'Administrador',
    estatus: 'No Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'Vostro.gab@praxisglobe.net',
    name: 'Vostro Garcia Acero',
    roles: 'Cliente',
    estatus: 'No Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
  {
    usuario: 'Luz.garcia',
    name: 'Luz Garcia Barron',
    roles: 'Administrador',
    estatus: 'Validado',
    fechaAl: 'mm/dd/aaaa',
    ultimoIn: 'mm/dd/aaaa',
  },
];


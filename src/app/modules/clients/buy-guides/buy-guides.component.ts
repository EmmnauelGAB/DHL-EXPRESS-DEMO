import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-buy-guides',
  templateUrl: './buy-guides.component.html',
  styleUrls: ['./buy-guides.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BuyGuidesComponent implements OnInit {

  search : String ="";
  displayedColumns: string[] = ['rfc', 'razonSocial', 'nombreContacto', 'correoElectronico'];
  dataSource = new MatTableDataSource<Cliente>(ELEMENT_DATA);

  displayedColumns2: string[] = ['numeroGuias', 'precio'];
  dataSource2 = new MatTableDataSource<CapturaCotizacion>(ELEMENT_DATA2);
 
 
  direccionFacturacionChose: number;

  formClabeInterbancaria: boolean = false;
  formTarjeta: boolean = false;
  isChecked:boolean=false;
  
  onSubmit() {
    return false;
  }
  @ViewChild(MatPaginator)

  paginator!: MatPaginator;
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
 

  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

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


  public mostrarFormClabeInterbancaria(){
    this.formClabeInterbancaria=true;
    this.formTarjeta=false;
  }
  

  public mostrarFormTarjeta(){
    this.formClabeInterbancaria=false;
    this.formTarjeta=true;
  }
  

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
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


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './buy-guides-dialog.component.html',
  styleUrls: ['./buy-guides.component.css']
})
export class DialogElementsExampleDialog {

  constructor(public dialog: MatDialog) {}
  closeDialog(){
    this.dialog.closeAll();
 }
}
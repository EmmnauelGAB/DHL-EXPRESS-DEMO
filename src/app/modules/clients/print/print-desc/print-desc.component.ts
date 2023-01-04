import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-print-desc',
  templateUrl: './print-desc.component.html',
  styleUrls: ['./print-desc.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PrintDescComponent implements AfterViewInit {

  search : String ="";
  displayedColumns: string[] = ['folio', 'totalGuides','useGuides', 'asingGuides', 'print', 'availableGuides', 'printGuides'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)

  paginator!: MatPaginator;
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  //Confirmacion
  tiles: Tile[] = [
    {text: 'Descripción', cols: 4, rows: 1, color: 'grey', Desc: ''},
    {text: 'Guías a imprimir', cols: 1, rows: 2, color: 'grey', Desc: ''},
    {text: 'Guías totales', cols: 2, rows: 1, color: 'grey', Desc: ''},
    {text: 'Guías disponibles', cols: 2, rows: 1, color: 'grey', Desc: ''},
  ];

  infoRem: infoRe[] = [
    {text: 'Nombre de la empresa', cols: 5, rows: 1, color: 'grey', Desc: ''},
    {text: 'Contacto', cols: 3, rows: 1, color: 'grey', Desc: ''},
    {text: 'Direccion de Correo electronico', cols: 2, rows: 1, color: 'grey', Desc: ''},
    {text: 'Número de teléfono', cols: 3, rows: 1, color: 'grey', Desc: ''},
    {text: 'Extensión', cols: 2, rows: 1, color: 'grey', Desc: ''},
    {text: 'Dirección', cols: 5, rows: 2, color: 'grey', Desc: ''},
  ]

  infoDes: infoDe[] = [
    {text: 'Nombre de la empresa', cols: 5, rows: 1, color: 'grey', Desc: ''},
    {text: 'Contacto', cols: 3, rows: 1, color: 'grey', Desc: ''},
    {text: 'Direccion de Correo electronico', cols: 2, rows: 1, color: 'grey', Desc: ''},
    {text: 'Número de teléfono', cols: 3, rows: 1, color: 'grey', Desc: ''},
    {text: 'Extensión', cols: 2, rows: 1, color: 'grey', Desc: ''},
    {text: 'Dirección', cols: 5, rows: 2, color: 'grey', Desc: ''},
  ]


}
export interface PeriodicElement {
  folio: string;
  date: string;
  totalGuides: number;
  useGuides: number;
  asingGuides: number;
  availableGuides: number;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  Desc: string;
}

export interface infoRe {
  color: string;
  cols: number;
  rows: number;
  text: string;
  Desc: string;
}

export interface infoDe {
  color: string;
  cols: number;
  rows: number;
  text: string;
  Desc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

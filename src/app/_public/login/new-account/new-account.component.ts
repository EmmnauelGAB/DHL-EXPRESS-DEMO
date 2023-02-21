import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {


  /**Ver contraseña */
  hide = true;

  /**Funciones formulario Cliente */
  public viewFormClient : boolean = false;
  public mostrarFormClient() {
    this.viewFormClient = true;

    this.viewFormEmply = false;
  }
  public isCheckEnabled = false;
  toggleCheck() {
    this.isCheckEnabled = !this.isCheckEnabled;
  }

  //enable = true;

  /**Informacion de facturacion */
  name: string;
  rfc: string;
  regFis: string;
  infoFact: string;
  seasons: string[] = ['Persona física', 'Persona moral'];
  cp: string;

  /**Uso del CFDI */
  selectedValue: string;

  foods: Food[] = [
    {value: 'G03 Gasto en general.', viewValue: 'G03 Gasto en general.'},
    {value: '101 Construcciones.', viewValue: '101 Construcciones.'},
    {value: '102 Mobiliario y equipo de oficina por inversiones.', viewValue: '102 Mobiliario y equipo de oficina por inversiones.'},
    {value: '103 Equipo de transporte.', viewValue: '103 Equipo de transporte.'},
    {value: '104 Equipo de cómputo y accesorios.', viewValue: '104 Equipo de cómputo y accesorios.'},
    {value: '105 Dados, troqueles, moldes, matrices y herramental.', viewValue: '105 Dados, troqueles, moldes, matrices y herramental.'},
    {value: '106 Comunicaciones telefónicas.', viewValue: '106 Comunicaciones telefónicas.'},
    {value: '107 Comunicaciones satelitales.', viewValue: '107 Comunicaciones satelitales.'},
    {value: '108 Otra maquinaria y equipo.', viewValue: '108 Otra maquinaria y equipo.'},
  ];

  /**Confirmar datos de Facturacion */
  favoriteSeason: string;
  facts: string[] = ['Winter', 'Spring'];


  /**Funciones Formulario Empleado */
  public viewFormEmply: boolean = false;
  public mostrarFormEmply() {
    this.viewFormEmply = true;
    this.viewFormClient = false;

  }
}

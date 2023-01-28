import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-edit-add',
  templateUrl: './form-edit-add.component.html',
  styleUrls: ['./form-edit-add.component.css']
})
export class FormEditAddComponent {

 /**Funciones formulario de administrador */
  /**Array de roles y perfiles */
  roleProfile = new FormControl('');
  roleList: string[] = ['Administrador', 'Áreas comerciales', 'Cliente', 'Retail', 'Tesorería', 'Contabilidad', 'Billing', 'Soporte'];
  public viewFormAdmin: boolean = false;
  public mostrarFormAdmin() {
    this.viewFormAdmin = true;
    this.viewFormClient = false;
    this.viewFormEmply = false;
  }

  /**Ver contraseña */
  hide = true;

  /**Funciones formulario Cliente */
  public viewFormClient : boolean = false;
  public mostrarFormClient() {
    this.viewFormClient = true;
    this.viewFormAdmin = false;
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
    this.viewFormAdmin = false;
  }
}

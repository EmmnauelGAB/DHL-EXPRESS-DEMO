import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
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
export class PrintDescComponent implements OnInit {

  search : String ="";
  addressSelect: string;
  addressDestinarioSelect: string;
  
  remitenteForm: FormGroup;
  destinatarioForm: FormGroup;

  showButtonChangeAddres:boolean = true
  showAddAddress: boolean =  false
  showButtonChangeAddresDestinatario:boolean = true
  showAddAddressDestinatario: boolean =  false

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  
  ngOnInit(): void {
    this.remitenteForm = this._formBuilder.group({
      addressSelect: ['', Validators.required],
    });
    this.destinatarioForm = this._formBuilder.group({
      addressDestinarioSelect: ['', Validators.required],
    });
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

  public getDireccion (address: ADDRRES_BOOK):string {
    return `${address.calle}, CP. ${address.cp}, COL. ${address.colonia}, ${address.ciudad}`
  }

  public mostrarAlldirecciones(id:string) {
    if(id === 'remitente') {
      this.remitenteForm.controls['addressSelect'].reset()
      this.showButtonChangeAddres = false
      this.addressBook.forEach((addres) => {
        addres.default = true
      })
    } else if(id === 'destinatario') {
      this.destinatarioForm.controls['addressDestinarioSelect'].reset()
      this.showButtonChangeAddresDestinatario = false
      this.addressBookDestinatario.forEach((addres) => {
        addres.default = true
      })
    }

  }

  public onChangeAddress(name:any) {
    this.showButtonChangeAddres = true
    this.addressBook.forEach((addres) => {
      if(addres.razonSocial != name){
        addres.default = false
      } 
    })
  }

  public onChangeAddressDestinatario(name:any) {
    this.showButtonChangeAddresDestinatario = true
    this.addressBookDestinatario.forEach((addres) => {
      if(addres.razonSocial != name){
        addres.default = false
      } 
    })
  }

  public showFormAddress(id:string) {
    if(id === 'remitente'){
      this.showAddAddress = !this.showAddAddress
    } else if(id === 'destinatario') {
      this.showAddAddressDestinatario = !this.showAddAddressDestinatario
    }
    
  } 

  addressBook: ADDRRES_BOOK[] = [{
        razonSocial: "Praxis IT | OMAR CABRERA",
        contacto: "OMAR CABRERA",
        email: "omar@gmail.com",
        telefono: "5555555555",
        calle: "Insurgentes sur 64 Insurgentes sur 64 Insurgentes sur 64 Insurgentes sur 64",
        cp: "06600",
        colonia: "Juarez",
        ciudad: "CDMX",
        estado: "CDMX",
        default: true
    }, {
      razonSocial: "Praxis IT",
      contacto: "OMAR CABRERA",
      email: "omar@gmail.com",
      telefono: "5555555555",
      calle: "Insurgentes sur 64",
      cp: "06600",
      colonia: "Juarez",
      ciudad: "CDMX",
      estado: "CDMX"
    },
    {
      razonSocial: "OMAR CABRERA",
      contacto: "OMAR CABRERA",
      email: "omar@gmail.com",
      telefono: "5555555555",
      calle: "Insurgentes sur 64",
      cp: "06600",
      colonia: "Juarez",
      ciudad: "CDMX",
      estado: "CDMX",
    }
  ];

  addressBookDestinatario: ADDRRES_BOOK[] = [{
        razonSocial: "Praxis IT | OMAR CABRERA",
        contacto: "OMAR CABRERA",
        email: "omar@gmail.com",
        telefono: "5555555555",
        calle: "Insurgentes sur 64 Insurgentes sur 64 Insurgentes sur 64 Insurgentes sur 64",
        cp: "06600",
        colonia: "Juarez",
        ciudad: "CDMX",
        estado: "CDMX",
        default: true
    }, {
      razonSocial: "Praxis IT",
      contacto: "OMAR CABRERA",
      email: "omar@gmail.com",
      telefono: "5555555555",
      calle: "Insurgentes sur 64",
      cp: "06600",
      colonia: "Juarez",
      ciudad: "CDMX",
      estado: "CDMX"
    },
    {
      razonSocial: "OMAR CABRERA",
      contacto: "OMAR CABRERA",
      email: "omar@gmail.com",
      telefono: "5555555555",
      calle: "Insurgentes sur 64",
      cp: "06600",
      colonia: "Juarez",
      ciudad: "CDMX",
      estado: "CDMX",
    }
  ]
}

export interface ADDRRES_BOOK {
  razonSocial: string,
  contacto: string,
  email: string,
  telefono: string,
  extencion?: string,
  calle: string,
  departamento?: string,
  cp: string,
  colonia: string,
  ciudad: string,
  estado: string,
  default?:boolean
}

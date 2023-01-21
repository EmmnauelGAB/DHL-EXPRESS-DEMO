import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  PACK = `10 guías prepagadas para entrega al día siguiente, costo por guía $ 196.00. Cobertura nacional, pesó máximo 1 kg. Vigencia 1 año fiscal. No aplica recolección, aplican términos y condiciones del producto.`;


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Product } from 'src/app/core/models/paquetes/package';
import { CartComponent } from './cart/cart.component';


export interface Vegetable {
  name: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  @Input()
  public cart: CartComponent;

  selectProduct(product: Product) {
    this.cart.addProduct(product);
  }

  deselectProduct(product: Product) {
    this.cart.removeProduct(product);
  }




  PACK = `10 guías prepagadas para entrega al día siguiente, costo por guía $ 196.00. Cobertura nacional, pesó máximo 1 kg. Vigencia 1 año fiscal. No aplica recolección, aplican términos y condiciones del producto.`;


  constructor() { }

  ngOnInit(): void {
  }

}

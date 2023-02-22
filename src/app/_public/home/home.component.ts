import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Product } from 'src/app/core/models/paquetes/package';
import { CartComponent } from './cart/cart.component';
import { PackagesService } from 'src/app/modules/clients/services/packages.service';
import { GenericResponse } from 'src/app/modules/clients/model/genericResponse.model';
import { Package } from 'src/app/modules/clients/model/package.model';
import { Observable } from 'rxjs';


export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isZeroInputGeneric: boolean = false;

  public products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  //public packagesData: Package[];

  @Input()
  public cart: CartComponent;

  validValueInput(event: any){
    return false;
  }


  selectProduct(product: Product) {
    this.cart.addProduct(product);
  }

  deselectProduct(product: Product) {
    this.cart.removeProduct(product);
  }
 
  incrementToOne(event: MouseEvent){
    const valueAttr = this.extractValueOfEventLabel(event, 'btnsum');
    const input = document.getElementById(valueAttr) as HTMLInputElement;
    input.value = (parseInt(input.value) + 1).toString();
  }

  

  addToCart(event: MouseEvent){
    const valueAttr = this.extractValueOfEventLabel(event, 'id');
    const btn = document.getElementById(valueAttr) as HTMLInputElement;
    btn.classList.add("btn-add-to-cart-ok");
    btn.innerHTML = 'Agregado';

    setTimeout(() =>{
      btn.classList.remove("btn-add-to-cart-ok");
    btn.innerHTML = 'Agregar al carrito';
    }, 5000)
  }

  decrementToOne(event: MouseEvent){ 
    const valueAttr = this.extractValueOfEventLabel(event, 'btnrest');
    const input = document.getElementById(valueAttr) as HTMLInputElement;
    if(parseInt(input.value) > 0){
      input.value = (parseInt(input.value) - 1).toString();
    }
    
  }



  extractValueOfEventLabel(event: MouseEvent, label: string){
    const valueAttr = (event.currentTarget as HTMLButtonElement).getAttribute(label);
    const strValue: string = valueAttr ?? '';
    return strValue;
  }

  


  PACK = `10 guías prepagadas para entrega al día siguiente, costo por guía $ 196.00. Cobertura nacional, pesó máximo 1 kg. Vigencia 1 año fiscal. No aplica recolección, aplican términos y condiciones del producto.`;


  constructor(/*private packagesService: PackagesService*/) { }

  ngOnInit(): void {
    //this.obtenerPaquetesGuias();  TODO Descomentar
    //console.log("Data" + this.packagesData);
  }

  
  /* TODO
   * Descomentar una vez que ya haya servicos del backend
   */
 /* obtenerPaquetesGuias(){
    this.packagesService.getAllGuidesAvailable().subscribe(data => {
      this.packagesData = data.response;
      console.log(this.packagesData);
    });
  }*/

}

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/paquetes/package';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public selectedProducts: Product[] = [];
  @Input()
  public cart: CartComponent;

  addProduct(product: Product) {
    this.selectedProducts.push(product);
  }

  removeProduct(product: Product) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
  }

  deselectProduct(product: Product) {
    this.cart.removeProduct(product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

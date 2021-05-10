import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product: Product = new Product()
  @Output() addProductToCart : EventEmitter<Product> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addToCart(product: Product): void {
    this.addProductToCart.emit(product)
  }

}

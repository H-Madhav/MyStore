import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import {ProductsService} from '../services/products.service';
import {CartService} from '../services/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = []
  
  constructor(public cartService: CartService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductList().subscribe(data => {
      this.productList = data.map(product => {
        return {...product, qty: 1}
      })
    })
  }

  addProductToCart(product: Product): void {
    this.cartService.addToCart(product, product.qty)
  }

}

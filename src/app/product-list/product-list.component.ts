import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import {ProductsService} from '../services/products.service';
import {CartService} from '../services/cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  
  constructor(public cartService: CartService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductList().subscribe(data => {
      this.productList = data.map(product => {
        return {...product, qty: 1}
      })
    })
  }

}

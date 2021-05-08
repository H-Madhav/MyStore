import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  getTotal() : string{
    return this.productsService.cartList.reduce((acc, item) => {
      return acc + item.price * item.amount
    }, 0).toFixed(2) 
  }

}

import { Injectable } from '@angular/core';
import { CartData } from '../models/Cart';
import { CartItem, Product } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: CartItem[] = [];

  checkoutData: CartData = {
    fullName: '',
    address: '',
    creditCard: '',
    amountTotal: "0",
  }

  constructor() { }

  addToCart(product: Product, qty: number = 1): void {
    const productIndex = this.cartList.findIndex(item => item.id === product.id)
    if(productIndex > -1)  {
      this.cartList[productIndex].amount += qty;
    }else {
      this.cartList.push({...product, amount: qty})
    }
    alert("Product successfully added to cart")
  }

  removeFromCart(id: number): void {
    this.cartList = this.cartList.filter(item => item.id !== id);
    alert("Product removed from cart")
  }

  addCheckoutData(data: CartData): void {
    this.checkoutData = data;
    this.cartList = []
  }

}

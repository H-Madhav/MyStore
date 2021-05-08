import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Product, CartItem} from '../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  cartList: CartItem[] = [];

  constructor(private http: HttpClient) { 
    this.getData()
  }


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
  }

  getProducts(): Product[] {
    return this.productsList
  }

  getData(): void {
    this.http.get<Product[]>(".../../assets/data.json").subscribe(data => {
      this.productsList = data
    })
  }

  getDataById(id: number): Promise <Product | undefined>  {
    return this.http.get<Product[]>(".../../assets/data.json").toPromise()
    .then(data => {
     return data.find(item => item.id === id)
    })
  }

}

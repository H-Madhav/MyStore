import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Product} from '../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  cartList: Product[] = [];

  constructor(private http: HttpClient) { 
    this.getData()
  }


  addToCart(product: Product): Product[] {
    return this.cartList;
  }

  removeFromCart(id: number): void {
    this.cartList.filter(item => item.id !== id);
  }

  getProducts(): Product[] {
    return this.productsList
  }

  getData(): void {
    this.http.get<Product[]>(".../../assets/data.json").subscribe(data => {
      this.productsList = data;
    })
  }

  getDataById(id: number): Promise <Product | undefined>  {
    return this.http.get<Product[]>(".../../assets/data.json").toPromise()
    .then(data => {
     return data.find(item => item.id === id)
    })
  }

}

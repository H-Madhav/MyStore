import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Product} from '../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartList: Product[] = [];

  constructor(private http: HttpClient) { }


  addToCart(product: Product): Product[] {
    return this.cartList;
  }

  clearCart(): void {
    this.cartList = [];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(".../../assets/data.json");
  }
}

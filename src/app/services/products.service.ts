import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Product, CartItem} from '../models/Products'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getDataById(id: number): Promise <Product | undefined>  {
    return this.http.get<Product[]>(".../../assets/data.json").toPromise()
    .then(data => {
     return data.find(item => item.id === id)
    })
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(".../../assets/data.json")
  }

}

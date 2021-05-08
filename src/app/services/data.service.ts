import { Injectable } from '@angular/core';
import { CartData } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartData: CartData = {
    fullName: '',
    address: '',
    creditCard: '',
    amountTotal: "0",
  }

  constructor() { }
}

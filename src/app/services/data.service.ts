import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartData = {
    fullName: '',
    address: '',
    creditCard: '',
    amountTotal: "0",
  }

  constructor() { }
}

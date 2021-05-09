import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CartService} from '../services/cart.service'

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Input() amountTotal: string = "0"

  constructor(public cartService : CartService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.cartService.cartData.amountTotal = this.amountTotal;
    this.router.navigate(['/success'])
  }
}

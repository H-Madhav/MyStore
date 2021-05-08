import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Input() amountTotal: string = "0"

  constructor(public dataService : DataService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.dataService.cartData.amountTotal = this.amountTotal;
    this.router.navigate(['/success'])
  }
}

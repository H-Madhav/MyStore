import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_id: string = '1';
  product: Product = new Product() ;

  constructor(
    private actRoute: ActivatedRoute,
    public productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getDataById(parseInt(this.actRoute.snapshot.params.id)).then(data => {
      if(!data) {
        alert("product not found!")
        this.router.navigate(['/'])
      }else {
        this.product = {...data, qty: 1}
      }
    })
  }
  
}

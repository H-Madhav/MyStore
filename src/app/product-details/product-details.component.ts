import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_id: string = '1';
  product: any = {};

  constructor(private actRoute: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.product = this.productsService.getProducts().filter(product => product.id === parseInt(this.actRoute.snapshot.params.id))[0];
  }

  
}

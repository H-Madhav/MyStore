import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    
  }

}

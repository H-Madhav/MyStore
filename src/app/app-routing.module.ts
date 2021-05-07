import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component'
import {ProductDetailsComponent} from '../app/product-details/product-details.component';
import {ShoppingCartComponent} from '../app/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

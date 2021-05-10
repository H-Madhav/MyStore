import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from '../app/product-details/product-details.component';
import {ShoppingCartComponent} from '../app/shopping-cart/shopping-cart.component';
import {OrderConfirmationComponent} from '../app/order-confirmation/order-confirmation.component';
import {ProductsComponent} from '../app/products/products.component'

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'success', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

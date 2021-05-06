import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component'
import {ProductDetailsComponent} from '../app/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

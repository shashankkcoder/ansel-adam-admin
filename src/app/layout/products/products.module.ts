import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }

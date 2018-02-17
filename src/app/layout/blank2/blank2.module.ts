import { Blank2Component } from './blank2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blank2RoutingModule } from './blank2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Blank2RoutingModule
  ],
  declarations: [Blank2Component]
})
export class Blank2Module { }

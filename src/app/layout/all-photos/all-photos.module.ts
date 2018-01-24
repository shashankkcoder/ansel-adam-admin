import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosComponent } from './all-photos.component';

@NgModule({
  imports: [
    CommonModule,
    AllPhotosRoutingModule
  ],
  declarations: [AllPhotosComponent]
})
export class AllPhotosModule { }

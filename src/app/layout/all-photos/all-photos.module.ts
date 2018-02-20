import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosComponent } from './all-photos.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';

@NgModule({
  imports: [
    CommonModule,
    AllPhotosRoutingModule
  ],
  declarations: [AllPhotosComponent, UploadphotosComponent]
})
export class AllPhotosModule { }

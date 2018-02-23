import { ImageUploadModule } from './../../image-upload/image-upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosComponent } from './all-photos.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AllPhotosRoutingModule,
    ImageUploadModule,
    NgbModule
  ],
  declarations: [AllPhotosComponent, UploadphotosComponent]
})
export class AllPhotosModule { }

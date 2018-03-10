import { SelectImageComponent } from './../components/select-image/select-image.component';
import { MyCheckBoxComponent } from './../components/my-check-box/my-check-box.component';
import { ImageUploadModule } from './../../image-upload/image-upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosComponent } from './all-photos.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { LayoutModule } from '../layout.module';

@NgModule({
  imports: [
    CommonModule,
    AllPhotosRoutingModule,
    ImageUploadModule,
    NgbModule
  ],
  declarations: [AllPhotosComponent, UploadphotosComponent, PhotoDetailsComponent, MyCheckBoxComponent, SelectImageComponent]
})
export class AllPhotosModule { }

import { SelectImageModule } from './../../shared/modules/select-image/select-image.module';
import { MyCheckBoxModule } from './../../shared/modules/my-check-box/my-check-box.module';
import { ImageUploadModule } from './../../image-upload/image-upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosComponent } from './all-photos.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { LayoutModule } from '../layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AllPhotosRoutingModule,
    ImageUploadModule,
    NgbModule,
    FormsModule,
    MyCheckBoxModule,
    SelectImageModule
  ],
  declarations: [AllPhotosComponent, UploadphotosComponent, PhotoDetailsComponent]
})
export class AllPhotosModule { }

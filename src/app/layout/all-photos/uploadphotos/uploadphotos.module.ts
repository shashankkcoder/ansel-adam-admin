import { AllPhotosRoutingModule } from './../all-photos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadModule } from '../../../image-upload/image-upload.module';
import { UploadPhotosRoutingModule } from './uploadphotos-routing.module';

@NgModule({
  imports: [
    CommonModule, AllPhotosRoutingModule, ImageUploadModule, UploadPhotosRoutingModule
  ],
  declarations: []
})
export class UploadphotosModule { }

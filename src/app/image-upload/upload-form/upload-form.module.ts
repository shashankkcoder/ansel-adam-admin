import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFormRoutingModule } from './upload-form-routing.module';
import { UploadFormComponent } from './upload-form.component';

@NgModule({
  imports: [
    CommonModule,
    UploadFormRoutingModule,
    FormsModule
  ],
  declarations: [UploadFormComponent],
  exports: [UploadFormComponent]
})
export class UploadFormModule { }

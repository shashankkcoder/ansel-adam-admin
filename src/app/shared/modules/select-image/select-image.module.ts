import { MyCheckBoxModule } from './../my-check-box/my-check-box.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectImageComponent } from './select-image.component';

@NgModule({
  imports: [
    CommonModule,
    MyCheckBoxModule
  ],
  declarations: [SelectImageComponent],
  exports: [SelectImageComponent]
})
export class SelectImageModule { }

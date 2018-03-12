import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCheckBoxComponent } from './my-check-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyCheckBoxComponent],
  exports: [MyCheckBoxComponent]
})
export class MyCheckBoxModule { }

import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageActionsComponent } from './image-actions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    RouterModule
  ],
  declarations: [ImageActionsComponent],
  exports: [ImageActionsComponent]
})
export class ImageActionsModule { }

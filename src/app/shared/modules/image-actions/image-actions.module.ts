import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageActionsComponent } from './image-actions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    RouterModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [ImageActionsComponent],
  exports: [ImageActionsComponent]
})
export class ImageActionsModule { }

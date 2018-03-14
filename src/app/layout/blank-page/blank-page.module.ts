import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { ImageUploadModule } from '../../image-upload/image-upload.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, ImageUploadModule, FormsModule, MatCheckboxModule, MatMenuModule, MatIconModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { ImageUploadModule } from '../../image-upload/image-upload.module';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, ImageUploadModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}

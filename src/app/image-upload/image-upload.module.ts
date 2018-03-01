import { UploadFormComponent } from './upload-form/upload-form.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FileDropDirective } from './file-drop.directive';
import { ImageUploadComponent } from './image-upload.component';
import { ImageService } from './image.service';
import { FormsModule } from '@angular/forms';
import { UploadFormModule } from './upload-form/upload-form.module';

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule, UploadFormModule],
  declarations: [ImageUploadComponent, FileDropDirective],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImageUploadModule,
      providers: [ImageService]
    }
  }
}

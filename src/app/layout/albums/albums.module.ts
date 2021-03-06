import { MyCheckBoxModule } from './../../shared/modules/my-check-box/my-check-box.module';
import { SelectImageModule } from './../../shared/modules/select-image/select-image.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { ImageActionsModule } from '../../shared/modules/image-actions/image-actions.module';
import { AlbumNewComponent } from './album-new/album-new.component';
import { ProductsComponent } from './products/products.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule,
    SelectImageModule,
    MyCheckBoxModule,
    ImageActionsModule,
    LoadingModule
  ],
  declarations: [AlbumsComponent, AlbumDetailsComponent, AlbumEditComponent, AlbumNewComponent, ProductsComponent]
})
export class AlbumsModule { }

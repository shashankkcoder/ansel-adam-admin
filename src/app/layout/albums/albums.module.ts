import { MyCheckBoxModule } from './../../shared/modules/my-check-box/my-check-box.module';
import { SelectImageModule } from './../../shared/modules/select-image/select-image.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule,
    SelectImageModule,
    MyCheckBoxModule
  ],
  declarations: [AlbumsComponent, AlbumDetailsComponent, AlbumEditComponent]
})
export class AlbumsModule { }

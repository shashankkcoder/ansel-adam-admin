import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ],
  declarations: [AlbumsComponent, AlbumDetailsComponent]
})
export class AlbumsModule { }

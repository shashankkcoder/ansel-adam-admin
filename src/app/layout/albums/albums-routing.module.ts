import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PhotoDetailsComponent } from './../all-photos/photo-details/photo-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: AlbumDetailsComponent
  },
  {
    path: '',
    component: AlbumsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }

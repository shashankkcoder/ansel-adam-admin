import { AlbumNewComponent } from './album-new/album-new.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PhotoDetailsComponent } from './../all-photos/photo-details/photo-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: AlbumEditComponent
  },
  {
    path: 'details/:id',
    component: AlbumDetailsComponent
  },
  {
    path: 'new',
    component: AlbumNewComponent
  },
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }

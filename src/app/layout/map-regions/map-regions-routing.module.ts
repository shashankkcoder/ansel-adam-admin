import { EditPhotoMapComponent } from './edit-photo-map/edit-photo-map.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapRegionsComponent } from './map-regions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMapprofileComponent } from './edit-mapprofile/edit-mapprofile.component';

const routes: Routes = [
  {
    path: '',
    component: MapRegionsComponent
  },
  {
    path:'map-detail/:id',
    component: MapDetailComponent
  },
  {
    path:'editphoto',
    component: EditPhotoMapComponent
  },
  {
    path:'editmapprofile/:id',
    component: EditMapprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRegionsRoutingModule { }

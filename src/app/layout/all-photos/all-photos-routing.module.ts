import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
import { AllPhotosComponent } from './all-photos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // component: AllPhotosComponent,
    children: [
      { path: 'uploadphoto', component: UploadphotosComponent }, //loadChildren: './uploadphotos/uploadphotos.module#UploadphotosModule' },
      { path : '', component: AllPhotosComponent }
    ]
  },
  { path: 'details/:id', component: PhotoDetailsComponent }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPhotosRoutingModule { }

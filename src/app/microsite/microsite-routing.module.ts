import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeComponent } from './microsite.component';


const routes: Routes = [
  {
    path:'',
    component:MicrositeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrositeRoutingModule { }

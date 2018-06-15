import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserConsentComponent } from './userconsent.component';

const routes: Routes = [
  {
    path:'',
    component: UserConsentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConsentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ArchivedComponent } from './archived/archived.component';
const routes: Routes = [
  {
    path: '',
    component: ReportComponent
  },
  {
    path:'archived',
    component: ArchivedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

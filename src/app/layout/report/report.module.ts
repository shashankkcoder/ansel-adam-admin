import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ArchivedComponent } from './archived/archived.component';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule
  ],
  declarations: [ReportComponent, ArchivedComponent]
})
export class ReportModule { }

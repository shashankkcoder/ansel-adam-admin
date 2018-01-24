import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRegionsRoutingModule } from './map-regions-routing.module';
import { MapRegionsComponent } from './map-regions.component';

@NgModule({
  imports: [
    CommonModule,
    MapRegionsRoutingModule
  ],
  declarations: [MapRegionsComponent]
})
export class MapRegionsModule { }

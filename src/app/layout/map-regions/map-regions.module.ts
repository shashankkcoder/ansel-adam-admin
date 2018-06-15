import { MyCheckBoxModule } from './../../shared/modules/my-check-box/my-check-box.module';
import { SelectImageModule } from './../../shared/modules/select-image/select-image.module';
import { EditMapprofileComponent } from './edit-mapprofile/edit-mapprofile.component';
import { EditPhotoMapComponent } from './edit-photo-map/edit-photo-map.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRegionsRoutingModule } from './map-regions-routing.module';
import { MapRegionsComponent } from './map-regions.component';
import { ImageActionsModule } from '../../shared/modules/image-actions/image-actions.module';
import { RegionNewComponent } from './region-new/region-new.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    MapRegionsRoutingModule,
    FormsModule,
    MyCheckBoxModule,
    SelectImageModule,
    ImageActionsModule
  ],
  declarations: [MapRegionsComponent, MapDetailComponent, EditPhotoMapComponent,
    EditMapprofileComponent, RegionNewComponent, ProductsComponent]
})
export class MapRegionsModule { }

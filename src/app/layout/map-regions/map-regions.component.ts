import { MapRegionsService } from './../../service/map-regions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-regions',
  templateUrl: './map-regions.component.html',
  styleUrls: ['./map-regions.component.scss']
})
export class MapRegionsComponent implements OnInit {

  regions: any[];

  constructor(private mapRegionsService: MapRegionsService) { }

  getRegions() {
    this.mapRegionsService.getAll()
    .subscribe(
        regions => {
          this.regions = regions;
          console.log(this.regions);
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getRegions();
  }

}

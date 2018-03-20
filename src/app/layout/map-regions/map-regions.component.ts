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
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getRegions();
  }

  deleteRegion(id) {
    event.preventDefault();
    event.stopPropagation();
    
    if (confirm('Are you sure to delete this region with id ' + id + ' and all images associated with it?')) {
      this.mapRegionsService.deleteRegion(id).subscribe(response => {
        alert('Region with id ' + id + ' has been deleted.');
        location.reload();
      })
    }
  }

}

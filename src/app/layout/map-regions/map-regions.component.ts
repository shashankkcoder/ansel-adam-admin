import { MapRegionsService } from './../../service/map-regions.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map-regions',
  templateUrl: './map-regions.component.html',
  styleUrls: ['./map-regions.component.scss'],
  animations: [routerTransition()]
})
export class MapRegionsComponent implements OnInit {

  regions: any[];
  searchParam: string = null;

  constructor(private mapRegionsService: MapRegionsService, private route: ActivatedRoute) {

    /*this.route.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });*/

   }

  getRegions() {
    this.mapRegionsService.getRegionsIncludingHidden()
    .subscribe(
        regions => {
          this.regions = regions;
        },
        error => console.log('Error :: ' + error)
      );
  }

  getRegionsByName(name) {
    this.mapRegionsService.getRegionsByName(name).subscribe(
      regions => {
        this.regions = regions;
    },
    error => console.log('Error :: ' + error));
  }

  ngOnInit() {
    localStorage.setItem('selectedTab' , 'location');
    if (this.searchParam != null && this.searchParam != '') {
      this.getRegionsByName(this.searchParam);
    } else {
      this.getRegions();
    }
  }

  deleteRegion(id) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm('Are you sure to delete this region with id ' + id + ' and all images associated with it?')) {
      this.mapRegionsService.deleteRegion(id).subscribe(response => {
        alert('Region with id ' + id + ' has been deleted.');
        location.reload();
      });
    }
  }

  toggleSwitch(region) {
   let isPublic: Boolean = false;
    if (region.hidden) {
      isPublic = false;
    } else {
      isPublic = true;
    }

    this.mapRegionsService.updateRegionHiddenStatus(region.regionId, isPublic);
 }

}

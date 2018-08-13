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
  regionIsPublicMap: any = {};
  regionIsPaidMap: any = {};
  constructor(private mapRegionsService: MapRegionsService, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      debugger;
      this.searchParam = params['search'];
    });

   }

  getRegions() {
    this.mapRegionsService.getRegionsIncludingHidden()
    .subscribe(
        regions => {
          this.regions = regions;
          let regionIsPublicMapTemp: any =  {};
          let regionIsPaidMapTemp: any = {};
          this.regions.forEach(function(value) {
            regionIsPublicMapTemp[value.regionId] = value.hidden;
            regionIsPaidMapTemp[value.regionId] = value.paid;
          });
          this.regionIsPublicMap = regionIsPublicMapTemp;
          this.regionIsPaidMap = regionIsPaidMapTemp;
        },
        error => console.log('Error :: ' + error)
      );
  }

  getRegionsByName(name) {
    this.mapRegionsService.getRegionsByName(name).subscribe(
      regions => {
        this.regions = regions;
        let regionIsPublicMapTemp: any =  {};
        this.regions.forEach(function(value) {
          regionIsPublicMapTemp[value.regionId] = value.hidden;
        });
        this.regionIsPublicMap = regionIsPublicMapTemp;
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
   let hideIt: Boolean = false;
    if (!this.regionIsPublicMap[region.regionId]) {
      this.regionIsPublicMap[region.regionId] = true;
      hideIt = true;
    } else {
      hideIt = false;
      this.regionIsPublicMap[region.regionId] = false;
    }

    this.mapRegionsService.updateRegionHiddenStatus(region.regionId, hideIt);
 }

 togglePaidFree(region) {
   let isPaid: Boolean = false;
    if (!this.regionIsPaidMap[region.regionId]) {
      this.regionIsPaidMap[region.regionId] = true;
      isPaid = true;
    } else {
      isPaid = false;
      this.regionIsPaidMap[region.regionId] = false;
    }

    this.mapRegionsService.updateRegionPaidStatus(region.regionId, isPaid);
 }

}

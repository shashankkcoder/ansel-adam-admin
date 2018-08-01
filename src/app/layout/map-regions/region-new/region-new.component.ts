import { MultiSelectService } from './../../../service/multi-select.service';
import { ImageService } from './../../../service/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MyImage } from './../../../model/MyImage';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Region } from '../../../model/region';
import { MapRegionsService } from '../../../service/map-regions.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-region-new',
  templateUrl: './region-new.component.html',
  styleUrls: ['./region-new.component.scss'],
  animations: [routerTransition()]
})
export class RegionNewComponent implements OnInit {

  id: number;
  region$: Observable<Region>;
  regionName: string;
  regionLatitude: number;
  regionLongitude: number;
  regionDescription: string;
  imageFile: any;
  imageUrl: string;
  imageIds: any[] = [];
  defaultImage: MyImage;
  selectedImages: MyImage[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private regionService: MapRegionsService,
    private imageService: ImageService,
    private multiSelectService: MultiSelectService,
    private location: Location) { }

  ngOnInit() {
    console.log('receiving image ids: ' + this.multiSelectService.getSelectedImageIds());
    this.imageIds = this.multiSelectService.getSelectedImageIds();

    this.imageIds.forEach((item, index) => {
      // gather selected images
      this.imageService.getImageWithId(item).subscribe(response => {
        // first selected image
        if (index === 0) {
          this.defaultImage = response;
        }
        this.selectedImages.push(response);
      });
    });
  }

  onFileChange(event) {
    this.imageFile = event.file;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(regionName, regionDescription) {
    let latitude = 0;
    let longitude = 0;

    if (this.regionLatitude && this.regionLongitude) {
      latitude = this.regionLatitude;
      longitude = this.regionLongitude;
    } else {
      alert('Invalid region coordinates');
      return;
    }

    // create new region
    let newregion = {
      "name": this.regionName,
      "description": this.regionDescription,
      "defaultImageUrl": this.defaultImage.url,
      "latitude": latitude,
      "longitude": longitude
    }

    let newRegionId = -1;

    let newRegionResponse = this.regionService.createRegion(newregion).subscribe(response => {
      console.log('created new region ' + JSON.stringify(response));
      newRegionId = response.regionId;

      // add selected images to the new region
      this.imageIds.forEach((item, index) => {
        // update images with the new region
        this.imageService.updateImageRegion(item, newRegionId);
      });
        alert("New region created");
        this.router.navigate(['/map-regions']);
    });


  }

  onCancel() {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormModule } from './../../form/form.module';
import { Observable } from 'rxjs/Observable';
import { Region} from './../../../model/region';
import { ActivatedRoute } from '@angular/router';
import { MapRegionsService } from './../../../service/map-regions.service';
@Component({
  selector: 'app-edit-mapprofile',
  templateUrl: './edit-mapprofile.component.html',
  styleUrls: ['./edit-mapprofile.component.scss']
})
export class EditMapprofileComponent implements OnInit {
  id: number;
  Region$: Observable<Region>;
  regionName:string;
  Lattitude:string;
  Longitude:string;
  regionDescription: string;
  regionId:string;
  constructor(private route: ActivatedRoute, private regionService: MapRegionsService, private location: Location) { }
  url:string;
  region: Region;

  ngOnInit() {
   
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
  });
  this.Region$ = this.regionService.getRegionWithId(this.id);

  this.Region$.subscribe(response => {
    this.url = response.defaultImageUrl;
  });

  console.log(this.url);

    console.log( this.Region$);
   
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
        console.log(this.url);
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onSubmit(regionId, regionName, regionDescription,Latitude,Longitude){
    console.log(
      "regionId="+regionId +
      "regionName="+regionName +
      "regionDescription="+regionDescription +
      "latitude=" + Latitude +
      "longitude" + Longitude 
    );
  }

  onCancel() {
    this.location.back();
  }
}

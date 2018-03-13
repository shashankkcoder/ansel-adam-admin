import { MyImage } from './../../../model/MyImage';
import { Observable } from 'rxjs/Observable';
import { ImageService } from './../../../service/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  cautionMessage: string;
  year: string;

  image$: Observable<MyImage>;  

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    // not allows to navigate to the same page
    // let id = this.route.snapshot.paramMap.get('id');
    
    // allows navigate to the same page
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    this.image$ = this.imageService.getImageWithId(this.id);

    this.image$.subscribe(image => {
      this.name = image.name;
      this.description = image.description;
      this.latitude = image.latitude;
      this.longitude = image.longitude;
      this.cautionMessage = image.cautionMessage;
      this.year = image.year;
      },
      error => console.log('Error :: ' + error)
    );
    
  }

  updateImage(id) {
    console.log('updating image with id: ' + id);
    console.log('this name: ' + this.name);
    console.log('this desc: ' + this.description);
    console.log('this lat: ' + this.latitude);

    let updateImage = {
      "name": this.name,
      "description": this.description,
      "latitude": this.latitude,
      "longitude": this.longitude,
      "cautionMessage": this.cautionMessage,
      "year": this.year
      // "album": {
      //   "albumId": 1005
      // },
      // "region": {
      //   "regionId": 1003
      // }
    }

    console.log('new values: ' + JSON.stringify(updateImage));

    this.imageService.updateImage(id, updateImage);
  }

}

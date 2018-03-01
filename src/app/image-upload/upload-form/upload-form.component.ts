import { FileHolder } from './../image-upload.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  @Input() file: FileHolder;
  imageName: string = 'test name';
  imageDescription: string = 'test description';
  latitude: string = 'test latitude';
  longitude: string = 'test longitude';

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

  showFile() {
    console.log('imageName: ' + this.imageName);
    console.log('imageDescription: ' + this.imageDescription);
    console.log('latitude: ' + this.latitude);
    console.log('longitude: ' + this.longitude);
    console.log(this.file);
  }

}

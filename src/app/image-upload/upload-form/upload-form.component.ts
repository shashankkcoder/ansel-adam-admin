import { FileHolder } from './../image-upload.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  @Input() file: FileHolder;
  imageName: string;
  imageDescription: string = 'test description child';
  latitude: string = 'test latitude';
  longitude: string = 'test longitude';

  @Input() childMessage: string;

  @Output() onInputUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Input() files: FileHolder[] = [];

  constructor() { }

  ngOnInit() {
  }

  updateForm() {
    console.log("updating form ");
    
    // Only update data if image names are different
    
    if (this.files.includes(this.file)) {
      this.file.imageName = this.imageName;
      this.file.imageDescription = this.imageDescription;
    } else {
      this.file.imageName = this.imageName;
      this.file.imageDescription = this.imageDescription;
      this.files.push(this.file);
    }
    
    this.onInputUpdate.emit(this.files);
    // console.log(this.file.imageDescription);
    // console.log(this.file.imageName);
  }

  showFile() {
    this.file.imageName = this.imageName;
    this.file.imageDescription = this.imageDescription;
    console.log('imageName: ' + this.imageName);
    console.log('imageDescription: ' + this.imageDescription);
    console.log('latitude: ' + this.latitude);
    console.log('longitude: ' + this.longitude);
    console.log(this.file);
  }

}

import { FileHolder } from './../image-upload.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  @Input() file: FileHolder;
  imageName: string = '';
  imageDescription: string = '';
  year: string = '';
  latitude: string;
  longitude: string;
  safetyWarning: string;

  @Input() childMessage: string;

  @Output() onInputUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  updateForm() {
    // Only update data if image names are different
    this.file.imageName = this.imageName;
    this.file.imageDescription = this.imageDescription;
    this.file.year = this.year;
    this.file.latitude = this.latitude;
    this.file.longitude = this.longitude;
    this.file.safetyWarning = this.safetyWarning;
    
    this.onInputUpdate.emit(this.file);
  }

}

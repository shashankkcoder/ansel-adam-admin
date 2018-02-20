import { ImageUploadComponent } from './../../../image-upload/image-upload.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.scss']
})
export class UploadphotosComponent implements OnInit {

  @ViewChild(ImageUploadComponent) child;
  uploadBox = true;

  constructor() { }

  ngOnInit() {}

  onUploadFinished($event) {
    console.log('file loaded!');
    this.uploadBox = this.child.uploadBox;
	}

	onRemoved($event) {
    console.log('image removed');
  }

	onUploadStateChanged($event) {
    console.log('upload state changed');
  }

}

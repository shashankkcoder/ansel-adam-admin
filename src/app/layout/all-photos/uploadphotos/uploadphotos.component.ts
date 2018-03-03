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
  public press = false;
  public files = new Array();
  public next = false;
  public presssubmit = false;
  public showsubmit = false;

  constructor() { }

  ngOnInit() {
  }

  onUploadFinished($event) {
    console.log('file loaded!');
    this.uploadBox = this.child.uploadBox;
    this.files = this.child.files;
  }

  mynext() {
    this.press = !this.press;
    this.next = !this.next;
    this.uploadBox = !this.uploadBox;
    this.showsubmit = true;
  }

  submitnext() {
    this.showsubmit = !this.showsubmit;
    this.presssubmit = !this.presssubmit;

    this.child.submitAllFiles();
  }
  onRemoved($event) {
    console.log('image removed');
  }

  onUploadStateChanged($event) {
    console.log('upload state changed');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.scss']
})
export class UploadphotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onUploadFinished($event) {
		console.log('file loaded!')
	}

	onRemoved($event) {
    console.log('image removed');
  }

	onUploadStateChanged($event) {
    console.log('upload state changed');
  }

}

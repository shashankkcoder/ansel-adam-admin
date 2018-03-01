import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-blank-page',
	templateUrl: './blank-page.component.html',
	styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

	email: string = "example@gg.com";
	address: string = "my address";

	constructor() { }

	ngOnInit() { }

	onUploadFinished($event) {
		console.log('file loaded!')
	}

	onRemoved($event) {}

	onUploadStateChanged($event) {}

	log(firstName) {
		console.log(firstName);
	}

	onKeyUp() {
		console.log('this email: ' + this.email);
		console.log('this address: ' + this.address);
	}


}
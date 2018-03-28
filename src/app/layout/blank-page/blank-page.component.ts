import { Http, RequestOptionsArgs } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-blank-page',
	templateUrl: './blank-page.component.html',
	styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

	email: string = "example@gg.com";
	address: string = "my address";

	constructor(private http: HttpClient) { }

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

	getFlaggedPosts() {
		// let url = 'http://localhost:9090/anseladams/api/posts/flagged';
		let url = 'http://18.144.43.217:9090/anseladams/api/posts/flagged';

		const httpOptions = {
      headers: new HttpHeaders({
				'Authorization': '6fe99fb80a6948bea04d428d12ef2900'
      })
		};

		this.http.get(url, httpOptions).subscribe(response => {
			console.log(response);
		});

		// return this.http.get(url, { headers: new HttpHeaders({'Authorization': '6fe99fb80a6948bea04d428d12ef2900'})})
		// .map(response => {
    //   return response;
    // });
		

	}

	private handleError(error: Response) {
    if (error.status === 404) {
      alert('Not found');
    }
    if (error.status === 409) {
      alert('This email has already been used for an account.');
    }
    if (error.status === 400) {
      alert('Bad request');
    }
    if (error.status === 500) {
      alert('Server error');
    }
    console.log(error);

    // return Observable.throw(error.statusText);
  }


}
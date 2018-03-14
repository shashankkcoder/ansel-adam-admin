import { AppAuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;
	userAccessToken: string;

	constructor(public router: Router, private auth: AppAuthService) { }

	ngOnInit() { }

	onLoggedin() {		
		this.auth.authenticate(this.email, this.password).subscribe(response => {
			console.log(response);
			if (response.userAccessToken && response.isAdmin === true) {
				localStorage.setItem('userAccessToken', response.userAccessToken);
				localStorage.setItem('isLoggedin', 'true');
				localStorage.setItem('fullName', response.name);

				this.router.navigateByUrl('/map-regions');
			} else {
				this.router.navigateByUrl('/login');
			}
		});
	}

}

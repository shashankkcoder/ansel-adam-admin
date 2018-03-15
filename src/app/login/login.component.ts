import { AppAuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

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

	constructor(public router: Router, private auth: AppAuthService, private socialAuthService: AuthService) { }

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

	socialSignIn(socialPlatform: string) {
		let socialPlatformProvider;
		console.log("before login" + socialPlatformProvider);
		if (socialPlatform == "facebook") {
			socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
			// localStorage.setItem('isLoggedin','true');
			console.log('navigating');

		} else if (socialPlatform == "google") {
			// localStorage.setItem('isLoggedin','true');			
			socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		}
		this.router.navigateByUrl('/map-regions');

		this.socialAuthService.signIn(socialPlatformProvider).then(
			(userData) => {
				console.log(socialPlatform + " sign in data : ", userData);
				// Now sign-in with userData
				console.log("after login" + socialPlatformProvider);
			}
		);
	}

}

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
			if (response.userAccessToken && response.isAdmin === true) {
				localStorage.setItem('userAccessToken', response.userAccessToken);
				localStorage.setItem('isLoggedin', 'true');
				localStorage.setItem('fullName', response.name);

				this.router.navigateByUrl('/map-regions');
			} else {
				this.router.navigateByUrl('/login');

				alert('Fail to login');
			}
		});
	}

	socialSignIn(socialPlatform: string) {
		let socialPlatformProvider;
		if (socialPlatform == "facebook") {
			socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
		} else if (socialPlatform == "google") {
			socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		}

		this.socialAuthService.signIn(socialPlatformProvider).then(
			(userData) => {
				// console.log(userData);
				if (socialPlatform === 'google') {
					this.auth.googleDetail(userData.idToken).subscribe(response => {
						if (response.admin === true) {
							// Now sign-in with userData
						localStorage.setItem('userAccessToken', response.userAccessToken);
						localStorage.setItem('isLoggedin', 'true');
						localStorage.setItem('fullName', response.name ? response.name : 'Anonymous');

							this.router.navigateByUrl('/map-regions');
						} else {
							alert('Not an admin account');
							this.router.navigateByUrl('/login');
						}
					});
				}

				if (socialPlatform === 'facebook') {
					this.auth.facebookDetail(userData.token).subscribe(response => {
						if (response.admin === true) {
								// Now sign-in with userData
							localStorage.setItem('userAccessToken', response.userAccessToken);
							localStorage.setItem('isLoggedin', 'true');
							localStorage.setItem('fullName', response.name ? response.name : 'Anonymous');

							this.router.navigateByUrl('/map-regions');
						} else {
							alert('Not an admin account');
							this.router.navigateByUrl('/login');
						}
					});
				}

				console.log("after login " + socialPlatformProvider);
			}
		);
	}

}

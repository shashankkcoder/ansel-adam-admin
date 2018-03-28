import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AppAuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
	animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

	name: string;
	email: string;
	password: string;

	constructor(private auth: AppAuthService, private router: Router) { }

	ngOnInit() { }

	onRegister() {
		this.auth.register(this.name, this.email, this.password).subscribe((response) => {
			console.log(response);
			if (response.status === 'Success') {
				alert("Your account has been created. Please check your email for verification.");
				this.router.navigateByUrl('/login');
			} else {
				alert("Failed to create account");
			}
		});
	}


}

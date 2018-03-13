import { Response } from '@angular/http';
import { AuthService } from './../service/auth.service';
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

	constructor(private auth: AuthService) { }

	ngOnInit() { }

	onRegister() {
		this.auth.register(this.name, this.email, this.password).subscribe((response: Response) => {
			console.log(response);
			if (response.status === 200) {
				alert("Your account has been created. Please check your email for verification.");
			} else {
				alert("Failed to create account");
			}
		});
	}


}

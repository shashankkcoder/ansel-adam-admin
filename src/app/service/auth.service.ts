import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  authUrl: string = 'http://34.204.68.134:9090/anseladams/users/authentication';
  registerUrl: string = 'http://34.204.68.134:9090/anseladams/users';
  userProfile: User;

  constructor(private http: HttpClient) { }

  authenticate(email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'email': email,
        'password': password
      })
    };

    return this.http.post(this.authUrl, this.userProfile, httpOptions).map(response => {
      return response;
    })
    .catch(this.handleError);
  }

  register(fullName, email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'email': email,
        'password': password,
        'name': fullName
      })
    };

    return this.http.post(this.registerUrl, null, httpOptions).map(response => {
      return response;
    })
    .catch(this.handleError);
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

    return Observable.throw(error.statusText);
  }

}

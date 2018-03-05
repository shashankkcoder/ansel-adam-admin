import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  apiUrl: string = 'http://34.204.68.134:9090/anseladams/users/authentication';
  userProfile: User;

  constructor(private http: HttpClient) { }

  authenticate(email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'email': email,
        'password': password
      })
    };

    return this.http.post(this.apiUrl, this.userProfile, httpOptions).map(response => {
      return response;
    })
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

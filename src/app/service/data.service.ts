import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Album } from '../model/album';

@Injectable()
export class DataService {
  // private apiUrl = 'http://34.204.68.134:9090/anseladams';
  constructor(public apiUrl: string, public http: Http) {
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

  getAll(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  create(obj): Observable<any> {
    return this.http
      .post(this.apiUrl, obj)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  delete(id) {
    return this.http
      .delete(this.apiUrl + '/' + id)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  update(id, updateImage) {
    return this.http
      .patch(this.apiUrl + '/' + id, updateImage)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  handleError(error: Response) {
    if (error.status === 404) {
      alert('Already created');
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


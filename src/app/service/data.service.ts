import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Album } from '../model/album';

@Injectable()
export class DataService {
  // private apiUrl = 'http://34.204.68.134:9090/anseladams';
  constructor(private apiUrl: string, private http: Http) {
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

  getAll(): Observable<Album[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return <Album[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}


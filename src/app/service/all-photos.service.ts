import { MyImage } from './../model/MyImage';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AllPhotosService extends DataService {

  constructor(http: Http) {
    super('http://18.144.43.217:9090/anseladams/images', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

  getImagesOrderBy(qryStr): Observable<any> {
    return this.http.get(this.apiUrl+ "?" +qryStr).map(response => {
      // console.log(response);
      return response.json();
    });
  }
}
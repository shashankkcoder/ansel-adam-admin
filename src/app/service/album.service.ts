import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import { Album } from '../model/album';
import { DataService } from './data.service';

@Injectable()
export class AlbumService extends DataService {
  // private apiUrl = 'http://34.204.68.134:9090/anseladams/albums';

  constructor(http: Http) {
    super('http://34.204.68.134:9090/anseladams/albums', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

  // getAlbums (): Observable<Album[]> {
  //   return this.http
  //     .get(this.apiUrl)
  //     .map((response: Response) => {
  //       return <Album[]>response.json();
  //     })
  //     .catch(this.handleError);
  // }

  // private handleError(error: Response) {
  //   return Observable.throw(error.statusText);
  // }
}


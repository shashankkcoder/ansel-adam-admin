import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Album } from '../model/album';

@Injectable()
export class AlbumService {
  private apiUrl = 'http://34.204.68.134:9090/anseladams/albums';

  constructor(private http: Http) {
    console.log(this.getAlbums());
    console.log('hello ffrom album service');
  }

  getAlbums (): Observable<Album[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => {
        return <Album[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}


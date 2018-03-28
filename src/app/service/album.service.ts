import { MyImage } from './../model/MyImage';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import { Album } from '../model/album';
import { DataService } from './data.service';

@Injectable()
export class AlbumService extends DataService {
  
  constructor(http: Http) {
    super('http://18.144.43.217:9090/anseladams/albums', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }
  
  getAlbumsIncludingHidden(): Observable<any> {
    let albumUrl = 'http://18.144.43.217:9090/anseladams/api/albums/unhidden';
    let token = localStorage.getItem('userAccessToken');

    let headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
    
    let options = new RequestOptions({
      headers: headers
    });
    
    return this.http.get(albumUrl, options).map(response => {
      return response.json();
    })
    .catch(this.handleError);
  }

  getAlbumWithId(id) : Observable<Album> {
    let apiAlbumUrl = 'http://18.144.43.217:9090/anseladams/albums';

    return this.http.get(apiAlbumUrl + '/' + id).map(response => {
      return <Album>response.json();
    });
  }

  getImagesWithAlbumId(id): Observable<MyImage[]> {
    let apiAlbumUrl = 'http://18.144.43.217:9090/anseladams/albums';

    return this.http.get(apiAlbumUrl + '/' + id + '/images').map(response => {
      return response.json();
    });
  }

  createAlbum(album) : Observable<Album> {
    return this.create(album);
  }

  deleteAlbum(id) {
    return this.delete(id);
  }

  updateAlbum(id, updateAlbum) {
    return this.update(id, updateAlbum).subscribe(response => {
      console.log(response);
      console.log('album updated');
    });
  }

}


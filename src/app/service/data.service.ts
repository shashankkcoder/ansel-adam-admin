import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Album } from '../model/album';

@Injectable()
export class DataService {
  // private apiUrl = 'http://18.144.43.217:9090/anseladams';
  constructor(public apiUrl: string, public http: Http) {
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
        return response.json();
      })
      .catch(this.handleError);
  }

  delete(id) {
    return this.http
      .delete(this.apiUrl + '/' + id)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  update(id, updateObject) {
    return this.http
      .patch(this.apiUrl + '/' + id, updateObject)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  _updateImageAlbum(imageId, albumId) {
    return this.http
      .patch(this.apiUrl + '/' + imageId + '/album/' + albumId, null)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  _updateImageRegion(imageId, regionId) {
    return this.http
      .patch(this.apiUrl + '/' + imageId + '/region/' + regionId, null)
      .map((response: Response) => {
        // return <Album[]>response.json();
        return response.json();
      })
      .catch(this.handleError);
  }

  handleError(error: Response) {
    if (error.status === 404) {
      alert('Not found: ' + error.json().message);
    }
    if (error.status === 409) {
      alert('Already created: ' + error.json().message);
    }
    if (error.status === 400) {
      alert('Bad request: ' + error.json().message);
    }
    if (error.status === 500) {
      alert('Server error: ' + error.json().message);
    }
    console.log(error.json().message);
    // alert(error.json().message);

    return Observable.throw(error.statusText);
  }
}


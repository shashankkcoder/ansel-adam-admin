import { MyImage } from './../model/MyImage';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService extends DataService {

  // private apiUrl = 'http://34.204.68.134:9090/anseladams/images';

  constructor(http: Http) {
    super('http://34.204.68.134:9090/anseladams/images', http);
  }

  public postImage(url: string, image: File, headers?: Headers | { [name: string]: any }, partName: string = 'image', customFormData?: { [name: string]: any }, withCredentials?: boolean): Observable<Response> {
    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    const options: RequestOptionsArgs = new RequestOptions();

    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers(headers);
    }


    // add custom form data
    let formData = new FormData();
    for (let key in customFormData) {
      formData.append(key, customFormData[key]);
    }
    formData.append(partName, image);
    return this.http.post(url, formData, options);
  }

  uploadMiscImage(url, formData) : Observable<MyImage> {
    return this.http
      .post(url, formData)
      .map(response => {
        return response.json();
      });
      // .subscribe(
      //   data => console.log('file uploaded successfully'),
      //   error => console.log(error)
      // );
  }

  getImageWithId(id): Observable<MyImage> {
    return this.http.get(this.apiUrl + '/' + id).map(response => {
      // console.log(response);
      return response.json();
    });
  }

  deleteImage(id) {
    let image = { imageId: id };

    this.delete(id).subscribe(response => {
      console.log('image with id ' + id + ' has been deleted');
    })
  }

  updateImage(id, updateImage) {
    this.update(id, updateImage).subscribe(response => {
      console.log('image with id ' + id + ' has been updated');
      alert('Image details have been saved!');
    })



  }

}

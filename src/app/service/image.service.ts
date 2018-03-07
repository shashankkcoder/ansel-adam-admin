import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  private apiUrl = 'http://34.204.68.134:9090/anseladams/images';

  constructor(private http: Http) { }

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

  uploadMiscImage(url, formData) {
    return this.http
      .post(url, formData)
      .map(response => {});
      // .subscribe(
      //   data => console.log('file uploaded successfully'),
      //   error => console.log(error)
      // );
  }

  getImageWithId(id) {
    return this.http.get(this.apiUrl + '/' + id).map(response => {
      // console.log(response);
      return response.json();
    });
  }

}

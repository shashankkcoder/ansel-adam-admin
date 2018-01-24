import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AllPhotosService extends DataService {

  constructor(http: Http) {
    super('http://34.204.68.134:9090/anseladams/images', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

}

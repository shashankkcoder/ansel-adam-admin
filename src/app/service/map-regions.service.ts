import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class MapRegionsService extends DataService {

  constructor(http: Http) {
    super('http://34.204.68.134:9090/anseladams/regions', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

}

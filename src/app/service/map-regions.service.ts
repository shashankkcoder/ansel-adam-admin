import { MyImage } from './../model/MyImage';
import { Observable } from 'rxjs/Observable';
import { Region } from './../model/region';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class MapRegionsService extends DataService {

  constructor(http: Http) {
    super('http://18.144.43.217:9090/anseladams/regions', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }

  getRegionsIncludingHidden(): Observable<Region[]> {
    let regionUrl = 'http://18.144.43.217:9090/anseladams/regions/unhidden';
    return this.http.get(regionUrl).map(response => {
      return <Region[]>response.json();
    });
  }


  getRegionWithId(id) : Observable<Region> {
    let apiRegionUrl = 'http://18.144.43.217:9090/anseladams/regions';

    return this.http.get(apiRegionUrl + '/' + id).map(response => {
      return <Region>response.json();
    });
  }

  getRegionsByName(name): Observable<Region[]> {
    let apiRegionUrl = 'http://18.144.43.217:9090/anseladams/regions';

    return this.http.get(apiRegionUrl + '/' + name + '/search').map(response => {
      return response.json();
    });
  }

  getImagesWithRegionId(id): Observable<MyImage[]> {
    let apiRegionUrl = 'http://18.144.43.217:9090/anseladams/regions';

    return this.http.get(apiRegionUrl + '/' + id + '/images').map(response => {
      return response.json();
    });
  }

  updateRegion(id, updateRegion) {
    return this.update(id, updateRegion).subscribe(response => {
      // console.log(response);
      console.log('region updated');
    });
  }

  createRegion(region) : Observable<Region> {
    return this.create(region);
  }

  deleteRegion(id) {
    return this.delete(id);
  }

  updateRegionHiddenStatus(id, hideIt) {
    return this._updateRegionHiddenStatus(id, hideIt).subscribe(response => {
      console.log(response);
      console.log('album updated');
    });
  }

   updateRegionPaidStatus(id, isPaid) {
    return this._updateRegionPaidStatus(id, isPaid).subscribe(response => {
      console.log(response);
      console.log('album updated');
    });
  }
}

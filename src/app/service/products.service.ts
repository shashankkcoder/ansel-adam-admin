import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { Products } from '../model/products';

@Injectable()
export class ProductsService extends DataService {
  constructor(http: Http) {
    super('http://18.144.43.217:9090/anseladams/identifiers', http);
    // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
  }


    getAllProducts(): Observable<Products> {
        return this.http.get(this.apiUrl).map(response => {
        return <Products>response.json();
        });
    }
}

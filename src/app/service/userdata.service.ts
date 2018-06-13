import { UserDataShare } from './../model/userdatashare';
import { UserDataDownload } from './../model/userdatadownload';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataService extends DataService {
    constructor(http: Http) {
        super('http://18.144.43.217:9090/anseladams/userdata/shares', http);
        // http.get(this.apiUrl).subscribe(res => console.log(res.json()));
    }

    getShareCounts() {
        return this.http.get(this.apiUrl).map(response => {
            return response.json();
        });
    }


    getAppDownloadCounts() {
        return this.http.get('http://18.144.43.217:9090/anseladams/userdata/appdownloads').map(response => {
            return response.json();
        });
    }

    getMapDownloadCounts() {
        return this.http.get('http://18.144.43.217:9090/anseladams/userdata/downloads').map(response => {
            return response.json();
        });
    }
}

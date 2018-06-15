import {UserDataService} from './../../service/userdata.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataShare } from '../../model/userdatashare';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  shareStats: any = {
    todayCounts : 0,
    facebook : 0,
    instagram : 0,
    community : 0
  };

  appDownloadCounts: any = {
    todayCounts : 0,
    thisMonthCounts : 0,
    lastMonthCounts : 0
  };

  mapDownloadCounts: any = {
    todayCounts : 0,
    totalCounts : 0
  };


  constructor(private route: ActivatedRoute, private userDataService: UserDataService) { }

  ngOnInit() {
    this.getAllShareCounts();
    this.getAllAppDownloadCounts();
    this.getMapDownloadCounts();
  }

  getAllAppDownloadCounts() {
    this.userDataService.getAppDownloadCounts().subscribe(appDownload => {
      if (appDownload.todayCounts) {
        this.appDownloadCounts['todayCounts'] = appDownload.todayCounts;
       }
       if (appDownload.thisMonthCounts) {
        this.appDownloadCounts['thisMonthCounts'] = appDownload.thisMonthCounts;
       }
       if (appDownload.lastMonthCounts) {
        this.appDownloadCounts['lastMonthCounts'] = appDownload.lastMonthCounts;
       }
    });
  }

  getAllShareCounts() {
    this.userDataService.getShareCounts().subscribe(
      userShare => {
       if (userShare.facebook) {
        this.shareStats['facebook'] = userShare.facebook;
       }
       if (userShare.instagram) {
        this.shareStats['instagram'] = userShare.instagram;
       }
       if (userShare.community) {
        this.shareStats['community'] = userShare.community;
       }
       if (userShare.todayCounts) {
        this.shareStats['todayCounts'] = userShare.todayCounts;
       }
    },
      error => console.log('Error :: ' + error)
    );
  }

  getMapDownloadCounts() {
    this.userDataService.getMapDownloadCounts().subscribe(mapDownload => {
      if (mapDownload.todayCounts) {
        this.mapDownloadCounts['todayCounts'] = mapDownload.todayCounts;
       }
       if (mapDownload.facebook) {
        this.mapDownloadCounts['totalCounts'] = mapDownload.facebook;
       }
    });
  }

}

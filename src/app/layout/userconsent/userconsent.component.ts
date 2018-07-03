import { Component, OnInit } from '@angular/core';
import {AppAuthService} from './../../service/auth.service';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userconsent',
  templateUrl: './userconsent.component.html',
  styleUrls: ['./userconsent.component.scss']
})
export class UserConsentComponent implements OnInit {

  users: any = [];

  constructor(private route: ActivatedRoute, private appAuthService: AppAuthService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.appAuthService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }
}

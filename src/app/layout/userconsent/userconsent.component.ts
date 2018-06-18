import { Component, OnInit } from '@angular/core';
import {AppAuthService} from './../../service/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-userconsent',
  templateUrl: './userconsent.component.html',
  styleUrls: ['./userconsent.component.scss']
})
export class UserConsentComponent implements OnInit {

  constructor(private appAuthService: AppAuthService) { }

  users: any = {};
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

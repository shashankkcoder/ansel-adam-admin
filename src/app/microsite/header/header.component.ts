import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = null;
  fullName: string = 'Guest';
  needToShowDropDown: Boolean = false;
  constructor(public authService: AppAuthService) { }

  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
  }

  onMicrositeFormSubmit(searchTerm) {
    window.location.href = 'microsite?search=' + searchTerm;
  }

  hideShowRightMenu() {
    debugger;
    if (!this.needToShowDropDown) {
      this.needToShowDropDown = true;
    } else {
      this.needToShowDropDown = false;
    }
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('fullName');
    localStorage.removeItem('userAccessToken');
    localStorage.removeItem('selectedTab');
    // localStorage.removeItem('selectedTab');
    localStorage.clear();
    // localStorage.setItem('fullName', this.authService.userProfile.name);
}
}

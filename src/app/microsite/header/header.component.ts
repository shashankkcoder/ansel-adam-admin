import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = null;
  fullName: string = 'Guest';
  needToShowDropDown: Boolean = false;
  constructor(public authService: AppAuthService, private router: Router,private route: ActivatedRoute ) { 
     this.route.queryParams.subscribe(params => {
      debugger;
      this.searchTerm = params['search'];
    });
  }

  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
  }

  onMicrositeFormSubmit(searchTerm) {
    if (searchTerm) {
      window.location.href = 'microsite?search=' + searchTerm;
    } else {
      window.location.href = window.location.pathname;
    }
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

  reloadMicrosite() {
    debugger;
    this.router.navigateByUrl('/microsite');
    window.location.reload();
  }

}

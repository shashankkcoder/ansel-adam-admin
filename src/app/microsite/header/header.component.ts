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

  constructor(public authService: AppAuthService) { }

  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
  }

  onMicrositeFormSubmit(searchTerm) {
    window.location.href = 'microsite?search=' + searchTerm;
  }
}

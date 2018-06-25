import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        if (localStorage.getItem('isAdmin') == null) {
            this.router.navigate(['/login']);
        }
        if (localStorage.getItem('isAdmin') === 'false') {
            this.router.navigate(['/microsite']);
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppAuthService } from '../../../service/auth.service';
import { MultiSelectService } from './../../../service/multi-select.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    fullName: string='Guest';

    constructor(private translate: TranslateService, public router: Router, public authService: AppAuthService,private multiSelectService: MultiSelectService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.fullName = localStorage.getItem('fullName');
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
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
    
    changeLang(language: string) {
        this.translate.use(language);
    }

    navigateToNewAlbum() {
        let imageIds: any = [];
        this.multiSelectService.setSelectedImageIds(imageIds);
        this.router.navigateByUrl("/albums/new");
    }

    navigateToNewMapRegion() {
        let imageIds: any = [];
        this.multiSelectService.setSelectedImageIds(imageIds);
        this.router.navigateByUrl("/map-regions/new");
    }
}

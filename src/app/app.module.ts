import { MultiSelectService } from './service/multi-select.service';
import { AppAuthService } from './service/auth.service';
import { MapRegionsService } from './service/map-regions.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AlbumService } from './service/album.service';
import { AllPhotosService } from './service/all-photos.service';
import { ImageService } from './service/image.service';
import {ProductsService} from './service/products.service';
import {UserDataService  } from './service/userdata.service';
// import { ImageService } from './image-upload/image.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import {
	SocialLoginModule,
	AuthServiceConfig,
	GoogleLoginProvider,
	FacebookLoginProvider,
} from "angular5-social-login";
import { MicrositeComponent } from './microsite/microsite.component';
import { HeaderComponent } from './microsite/header/header.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
	// for development
	// return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Configs 
export function getAuthServiceConfigs() {
	let config = new AuthServiceConfig(
		[
			{
				id: FacebookLoginProvider.PROVIDER_ID,
				// provider: new FacebookLoginProvider("2100179203342485")
				provider: new FacebookLoginProvider("2027550003941038")
			},
			{
				id: GoogleLoginProvider.PROVIDER_ID,
				// provider: new GoogleLoginProvider("610210342160-kdkei8m42k5ut2ghjafqsr0chuqgf026.apps.googleusercontent.com")
				provider: new GoogleLoginProvider("926924233084-fvksj1h5vls8qihuut1ougtk1ia03ghl.apps.googleusercontent.com")
			},
		]
	);
	return config;
}

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		NgxPaginationModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		AppRoutingModule,
		HttpModule,
		FormsModule,
		SocialLoginModule
	],
	declarations: [AppComponent],
	providers: [AuthGuard, AlbumService, AllPhotosService, MapRegionsService,
		ImageService, AppAuthService, MultiSelectService, ProductsService, UserDataService, {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
  }],
	bootstrap: [AppComponent]
})
export class AppModule { }

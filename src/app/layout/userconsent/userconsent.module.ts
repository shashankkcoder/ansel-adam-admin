import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserConsentRoutingModule } from './userconsent-routing.module';
import { UserConsentComponent } from './userconsent.component';

@NgModule({
  imports: [
    CommonModule,
    UserConsentRoutingModule
  ],
  declarations: [UserConsentComponent]
})
export class UserConsentModule { }

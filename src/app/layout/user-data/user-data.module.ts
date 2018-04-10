import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';

@NgModule({
  imports: [
    CommonModule,
    UserDataRoutingModule
  ],
  declarations: [UserDataComponent]
})
export class UserDataModule { }

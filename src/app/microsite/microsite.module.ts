import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicrositeRoutingModule } from './microsite-routing.module';
import { MicrositeComponent } from './microsite.component';
import { HeaderComponent } from './header/header.component';
import { CommunityComponent } from './community/community.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MicrositeRoutingModule
  ],
  declarations: [MicrositeComponent, HeaderComponent, CommunityComponent]
})
export class MicrositeModule { }

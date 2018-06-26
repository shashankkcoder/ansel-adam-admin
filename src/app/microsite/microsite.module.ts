import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicrositeRoutingModule } from './microsite-routing.module';
import { MicrositeComponent } from './microsite.component';
import { HeaderComponent } from './header/header.component';
import { CommunityComponent } from './community/community.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MicrositeRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [MicrositeComponent, HeaderComponent, CommunityComponent]
})
export class MicrositeModule { }

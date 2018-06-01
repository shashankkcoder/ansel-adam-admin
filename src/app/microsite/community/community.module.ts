import {CommunityComponent} from './community.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
      declarations: [
      CommunityComponent],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [CommunityComponent]

})

export class CommunityModule {}

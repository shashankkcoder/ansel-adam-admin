import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {
    }
     myfunction()
    {
        var x= 5;
        var y=10;
        console.log(x+y);
    }
}

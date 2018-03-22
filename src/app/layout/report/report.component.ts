import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [routerTransition()]
})
export class ReportComponent implements OnInit {
  optionspan="false";
  constructor() { }

  ngOnInit() {
  }

}

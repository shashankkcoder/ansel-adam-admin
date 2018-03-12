import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-check-box',
  templateUrl: './my-check-box.component.html',
  styleUrls: ['./my-check-box.component.scss']
})
export class MyCheckBoxComponent {

  // 'isSelected'
  @Input() isSelected: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
  }
}

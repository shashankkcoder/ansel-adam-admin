import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-actions',
  templateUrl: './image-actions.component.html',
  styleUrls: ['./image-actions.component.scss']
})
export class ImageActionsComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  
  constructor() { }

  ngOnInit() {

  }
  
  addTo() {

  }

  deleteImages() {
    if (confirm('Are you sure to delete these images ')) {
     
    }
  }
}

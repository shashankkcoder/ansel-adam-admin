import { Router } from '@angular/router';
import { MyCheckBoxComponent } from './../my-check-box/my-check-box.component';
import { Image } from './../../../model/image';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {

  @Input() image: Image;
  selected: boolean;
  
  @ViewChild(MyCheckBoxComponent) myCheckBoxComponent: MyCheckBoxComponent

  @Output() selectedImage = new EventEmitter<any>();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  viewDetails(id) {
    this.route.navigate(['details/' + id]);
    // this.route.navigateByUrl('/all-photos/details/' + id);
  }

  editfile() {
  }
  deletefile() {
  }

  onSelect(id) {
    this.selected = this.myCheckBoxComponent.isSelected;

    this.selectedImage.emit(id);
  }

}
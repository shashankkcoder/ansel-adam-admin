import { MyImage } from './../../../model/MyImage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MyCheckBoxComponent } from './../my-check-box/my-check-box.component';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../../../service/image.service';

@Component({
  selector: 'select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {

  @Input() image: MyImage;
  selected: boolean;
  
  @ViewChild(MyCheckBoxComponent) myCheckBoxComponent: MyCheckBoxComponent

  @Output() selectedImage = new EventEmitter<any>();

  constructor(private router: Router, private imageService: ImageService) { }

  ngOnInit() {
  }

  viewDetails(id) {
    // this.route.navigate(['details/' + id]);
    this.router.navigateByUrl('/all-photos/details/' + id);
  }

  deleteImage(id) {
    if(confirm("Are you sure to delete this image?")) {
      this.imageService.deleteImage(id);

      alert('Image with id ' + id + ' has been deleted.');

      location.reload();
    }

  }

  onSelect(id) {
    this.selected = this.myCheckBoxComponent.isSelected;

    this.selectedImage.emit(id);
  }

}
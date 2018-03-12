import { MyCheckBoxComponent } from './../components/my-check-box/my-check-box.component';
import { Image } from './../../model/image';
import { Router } from '@angular/router';
import { AllPhotosService } from './../../service/all-photos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {

  images: any[];
  count: number;
  selectedImagesId: string[] = [];
  selected: boolean = false;

  @ViewChild(MyCheckBoxComponent) myCheckBoxComponent: MyCheckBoxComponent

  constructor(private allPhotosService: AllPhotosService, private route: Router) { }

  getAllImages(): void {
    this.allPhotosService.getAll()
      .subscribe(
        images => {
          this.images = images;
          this.count = this.images.length;
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getAllImages();
  }

  addToSelectedList(id) {
    let index = this.selectedImagesId.indexOf(id);

    if (index !== -1) {
      this.selectedImagesId.splice(index, 1);
    } else {
      this.selectedImagesId.push(id);
    }

    console.log('current list: ' + this.selectedImagesId);
  }

}

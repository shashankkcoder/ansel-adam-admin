import { Router } from '@angular/router';
import { AllPhotosService } from './../../service/all-photos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MyCheckBoxComponent } from '../../shared/modules/my-check-box/my-check-box.component';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss'],
  animations: [routerTransition()]
})
export class AllPhotosComponent implements OnInit {

  images: any[];
  count: number;
  selectedImagesId: string[] = [];
  selected: boolean = false;
  p: number = 1;

  @ViewChild(MyCheckBoxComponent) myCheckBoxComponent: MyCheckBoxComponent

  constructor(private allPhotosService: AllPhotosService, private route: Router) { }

  getAllImages(): void {
    this.allPhotosService.getAll()
      .subscribe(
        images => {
          this.images = images.content;
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

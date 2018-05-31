import { ActivatedRoute, Router } from '@angular/router';
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
  searchParam: string = null;

  @ViewChild(MyCheckBoxComponent) myCheckBoxComponent: MyCheckBoxComponent

  constructor(private allPhotosService: AllPhotosService, private route: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });
  }

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

  getAllImagesOrderBy(orderBy): void {
        var queryStr = "sort="+orderBy;

        if (this.searchParam != null) {
          this.getAllImagesByNameOrderBy(queryStr, this.searchParam);
        } else {
          this.allPhotosService.getImagesOrderBy(queryStr)
          .subscribe(
            images => {
                this.images = images.content;
                this.count = this.images.length;
            },
            error =>
               console.log('Error :: ' + error)
          );
        }
    }

    getAllImagesByNameOrderBy(orderBy, searchParam): void {
      var queryStr = "sort=" + orderBy;
      this.allPhotosService.getImagesByNameOrderBy(queryStr, searchParam)
        .subscribe(
          images => {
              this.images = images.content;
              this.count = this.images.length;
          },
          error =>
             console.log('Error :: ' + error)
        );
  }


  ngOnInit() {
    localStorage.setItem('selectedTab' , 'all-photos');
    if (this.searchParam != null && this.searchParam != '') {
      this.getAllImagesByNameOrderBy('recent', this.searchParam);
    } else {
      this.getAllImages();
    }
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

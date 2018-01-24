import { AllPhotosService } from './../../service/all-photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {

  images: any[];

  constructor(private allPhotosService: AllPhotosService) { }

  getAllImages(): void {
    this.allPhotosService.getAll()
      .subscribe(
        images => {
          this.images = images;
          console.log(this.images);
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getAllImages();
  }

}
import { Router } from '@angular/router';
import { AllPhotosService } from './../../service/all-photos.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {

  images: any[];
  count: number;

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

  viewDetails(id) {
    this.route.navigate(['details/' + id]);
    // this.route.navigateByUrl('/all-photos/details/' + id);
  }

  editfile() {
    
  }
  deletefile() {
  }

}

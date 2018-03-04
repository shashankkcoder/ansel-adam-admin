import { Observable } from 'rxjs/Observable';
import { ImageService } from './../../../service/image.service';
import { Image } from './../../../model/image';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  id: number;
  image: Image;
  image$: Observable<Image>;

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    // not allows to navigate to the same page
    // let id = this.route.snapshot.paramMap.get('id');
    
    // allows navigate to the same page
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    this.image$ = this.imageService.getImageWithId(this.id);
    
    // this.image$.subscribe(image => {
    //     this.image = image;
    //   },
    //   error => console.log('Error :: ' + error)
    // );
    
  }

}

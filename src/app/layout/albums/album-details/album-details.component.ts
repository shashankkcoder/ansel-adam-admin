import { Observable } from 'rxjs/Observable';
import { Image } from './../../../model/image';
import { Album } from './../../../model/album';
import { AlbumService } from './../../../service/album.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  id: number;
  album$: Observable<Album>;
  images$: Observable<Image[]>;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    // allows navigate to the same page
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    this.album$ = this.albumService.getAlbumWithId(this.id);

    this.images$ = this.albumService.getImagesWithAlbumId(this.id);
  }

}

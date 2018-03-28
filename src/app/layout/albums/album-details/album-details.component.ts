import { Location } from '@angular/common';
import { MyImage } from './../../../model/MyImage';
import { Observable } from 'rxjs/Observable';
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
  images$: Observable<MyImage[]>;
  selectedImagesId: string[] = [];
  isHidden: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) { }

  ngOnInit() {
    // allows navigate to the same page
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    this.album$ = this.albumService.getAlbumWithId(this.id);

    this.album$.subscribe(response => {
      this.isHidden = response.hidden;
    });

    this.images$ = this.albumService.getImagesWithAlbumId(this.id);
  }

  changeStatus(albumId) {
    if (confirm('Are you sure to make this album ' + (this.isHidden ? 'public' : 'private') + '?')) {
      this.isHidden = !this.isHidden;

      let updateAlbum = {
        "hidden": this.isHidden,
      };

      this.albumService.updateAlbum(albumId, updateAlbum);

      alert("Album with id " + albumId + "status has been change to " + (this.isHidden ? "private" : "public"));
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

  onCancel() {
    this.location.back();
  }

}

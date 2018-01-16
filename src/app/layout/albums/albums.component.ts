import { AlbumService } from './../../service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  _albumsArray: Album[];

  constructor(private albumService: AlbumService) { }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(
        resultArray => this._albumsArray = resultArray,
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getAlbums();
  }

}

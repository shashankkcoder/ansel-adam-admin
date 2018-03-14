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
    this.albumService.getAll()
      .subscribe(
        albums => {
          this._albumsArray = albums;
          console.log(this._albumsArray);
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getAlbums();
  }

  deleteAlbum(id) {
    if (confirm('Are you sure to delete this album with id ' + id + ' and all images associated with it?')) {
     
    }
  }
}

import { AlbumService } from './../../service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  animations: [routerTransition()]
})
export class AlbumsComponent implements OnInit {

  albums$: Album[];

  constructor(private albumService: AlbumService) { }

  getAlbums(): void {
    this.albumService.getAll()
      .subscribe(
        albums => {
          this.albums$ = albums;
        },
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getAlbums();
  }

  deleteAlbum(id) {
    event.preventDefault();
    event.stopPropagation();
    
    if (confirm('Are you sure to delete this album with id ' + id + ' and all images associated with it?')) {
      this.albumService.deleteAlbum(id).subscribe(response => {
        alert('Album with id ' + id + ' has been deleted.');
        location.reload();
      })
    }
  }
}

import { AlbumService } from './../../service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  animations: [routerTransition()]
})
export class AlbumsComponent implements OnInit {

  albums$: Album[];
  searchParam: string = null;

  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });
  }

  getAlbums(): void {
    // this.albumService.getAll()
    this.albumService.getAlbumsIncludingHidden()
      .subscribe(
        albums => {
          this.albums$ = albums;
        },
        error => console.log('Error :: ' + error)
      );
  }

  getAlbumsByName(name) {
    this.albumService.getAlbumsByName(name).subscribe(
      albums => {
        this.albums$ = albums;
      },
    error => console.log('Error :: ' + error));
  }

  ngOnInit() {
    localStorage.setItem('selectedTab' , 'album');
    if (this.searchParam != null && this.searchParam != '') {
      this.getAlbumsByName(this.searchParam);
    } else {
      this.getAlbums();
    }
  }

  deleteAlbum(id) {
    event.preventDefault();
    event.stopPropagation();

    if (confirm('Are you sure to delete this album with id ' + id + ' and all images associated with it?')) {
      this.albumService.deleteAlbum(id).subscribe(response => {
        alert('Album with id ' + id + ' has been deleted.');
        location.reload();
      });
    }
  }

  toggleSwitch(album) {
    let isPublic: Boolean = false;
    if (album.hidden) {
      isPublic = false;
    } else {
      isPublic = true;
    }

    this.albumService.updateAlbumHiddenStatus(album.albumId, isPublic);
 }
}

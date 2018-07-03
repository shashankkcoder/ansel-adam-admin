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
  albumIsPublicMap: any = {};
  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
    /*this.route.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });*/
  }

  getAlbums(): void {
    // this.albumService.getAll()
    this.albumService.getAlbumsIncludingHidden()
      .subscribe(
        albums => {
          this.albums$ = albums;
          let albumIsPublicMapTemp: any =  {};
          this.albums$.forEach(function(value) {
            albumIsPublicMapTemp[value.albumId] = value.hidden;
          });
          this.albumIsPublicMap = albumIsPublicMapTemp;
        },
        error => console.log('Error :: ' + error)
      );
  }

  getAlbumsByName(name) {
    this.albumService.getAlbumsByName(name).subscribe(
      albums => {
        this.albums$ = albums;
        let albumIsPublicMapTemp: any =  {};
        this.albums$.forEach(function(value) {
          albumIsPublicMapTemp[value.albumId] = value.hidden;
        });
        this.albumIsPublicMap = albumIsPublicMapTemp;
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
   debugger;
    let hideIt: Boolean = false;
    if (!this.albumIsPublicMap[album.albumId]) {
      this.albumIsPublicMap[album.albumId] = true;
      hideIt = true;
    } else {
      hideIt = false;
      this.albumIsPublicMap[album.albumId] = false;
    }

    this.albumService.updateAlbumHiddenStatus(album.albumId, hideIt);
 }
}

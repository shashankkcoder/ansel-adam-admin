import { FormModule } from './../../form/form.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './../../../service/album.service';
import { Album } from './../../../model/album';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss']
})
export class AlbumEditComponent implements OnInit {

  id: number;
  album$: Observable<Album>;
  albumName: string;
  albumDescription: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private location: Location) { }

  ngOnInit() {
    // allows navigate to the same page
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    this.album$ = this.albumService.getAlbumWithId(this.id);
  }

  onSubmit(albumId, albumName, albumDescription) {

    alert("editing album id: " + albumId + " " + albumName + " " + albumDescription);
  }

  onCancel() {
    this.location.back();
  }
}

// import { FormModule } from './../../form/form.module';
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
  // albumName: string;
  // albumDescription: string;
  imageFile: any;
  imageUrl: string;

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

    this.album$.subscribe(response => {
      this.imageUrl = response.defaultImageUrl;
    });
  }

  onFileChange(event) {
    this.imageFile = event.file;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(albumId, albumName, albumDescription) {
    console.log(this.imageFile);

    // "defaultImageUrl": null,
    let updateAlbum = {
      "name": albumName,
      "description": albumDescription
    };

    this.albumService.updateAlbum(albumId, updateAlbum);

    alert("Album with id: " + albumId + " has been updated.");
  }

  onCancel() {
    this.location.back();
  }
}

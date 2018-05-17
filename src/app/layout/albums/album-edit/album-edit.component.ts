// import { FormModule } from './../../form/form.module';
import { MyImage } from '../../../model/MyImage';
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
  images$: Observable<MyImage[]>;
  // albumName: string;
  // albumDescription: string;
  imageFile: any;
  imageUrl: string;
  display: any = '';
  selectedCoverImage$: any;
  selectedCoverImageUrl: string;


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
    
    this.images$ = this.albumService.getImagesWithAlbumId(this.id);
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

    if (this.selectedCoverImage$) {
      updateAlbum["defaultImageUrl"] =  this.selectedCoverImage$.url;
    }

    this.albumService.updateAlbum(albumId, updateAlbum);

    alert("Album with id: " + albumId + " has been updated.");
  }

  onCancel() {
    this.location.back();
  }

  openGalleryModal() {
    this.display = 'block';
  }
  closeGalleryModal() {
    this.display = 'none';
  }

  cancelUpdateCoverImage() {
    this.selectedCoverImage$ = null;
    this.closeGalleryModal();
  }

  selectedCoverImage (image) {
    this.selectedCoverImage$ = image;
    this.imageUrl = this.selectedCoverImage$.url;
    this.closeGalleryModal();
  }

}

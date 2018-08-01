import { ImageService } from './../../../service/image.service';
import { MyImage } from './../../../model/MyImage';
import { MultiSelectService } from './../../../service/multi-select.service';
import { Location } from '@angular/common';
import { AlbumService } from './../../../service/album.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from './../../../model/album';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-new',
  templateUrl: './album-new.component.html',
  styleUrls: ['./album-new.component.scss']
})
export class AlbumNewComponent implements OnInit {

  id: number;
  album$: Observable<Album>;
  albumName: string;
  albumDescription: string;
  imageFile: any;
  imageUrl: string;
  imageIds: any[] = [];
  defaultImage: MyImage;
  selectedImages: MyImage[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private imageService: ImageService,
    private multiSelectService: MultiSelectService,
    private location: Location) { }

  ngOnInit() {
    console.log('receiving image ids: ' + this.multiSelectService.getSelectedImageIds());
    this.imageIds = this.multiSelectService.getSelectedImageIds();

    this.imageIds.forEach((item, index) => {
      // gather selected images
      this.imageService.getImageWithId(item).subscribe(response => {
        // first selected image
        if (index === 0) {
          this.defaultImage = response;
        }
        this.selectedImages.push(response);
      });
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

  onSubmit(albumName, albumDescription) {

    // create new album
    let newAlbum = {
      "name": this.albumName,
      "description": this.albumDescription,
      "defaultImageUrl": this.defaultImage.url
    }

    let newAlbumId = -1;

    let newAlbumResponse = this.albumService.createAlbum(newAlbum).subscribe(response => {
      debugger;
      console.log('created new album ' + JSON.stringify(response));
      newAlbumId = response.albumId;

      // add selected images to the new album
      this.imageIds.forEach((item, index) => {
        // update images with the new album
        this.imageService.updateImageAlbum(item, newAlbumId);
      });
        alert("New album created");
        this.router.navigate(['/albums']);
    });
  }

  onCancel() {
    this.location.back();
  }

}

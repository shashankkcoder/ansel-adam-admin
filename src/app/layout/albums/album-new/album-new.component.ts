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
  
  selectedImages: MyImage[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private imageService: ImageService,
    private multiSelectService: MultiSelectService,
    private location: Location) { }

  ngOnInit() {
    // this.album$ = this.albumService.getAlbumWithId(this.id);

    // this.album$.subscribe(response => {
    //   this.imageUrl = response.defaultImageUrl;
    // });
    
    console.log('receiving image ids: ' + this.multiSelectService.getSelectedImageIds());
    let imageIds = this.multiSelectService.getSelectedImageIds();
    
    for (let id of imageIds) {
      this.imageService.getImageWithId(id).subscribe(response => {
        // console.log(response);
        this.selectedImages.push(response);
      });
    }
    
    // console.log('received images: ' + this.selectedImages);
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

  loadImages(imageIds) {
  }

  onSubmit(albumName, albumDescription) {
    console.log(this.imageFile);

    // "defaultImageUrl": null,
    let newAlbum = {
      "name": albumName,
      "description": albumDescription
    };

    alert('creating new album ' + newAlbum);
    // this.albumService.updateAlbum(albumId, updateAlbum);

    // alert("Album with id: " + albumId + " has been updated.");
  }

  onCancel() {
    this.location.back();
  }

}

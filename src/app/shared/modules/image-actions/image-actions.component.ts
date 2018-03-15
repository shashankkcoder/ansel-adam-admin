import { ImageService } from './../../../service/image.service';
import { MapRegionsService } from './../../../service/map-regions.service';
import { AlbumService } from './../../../service/album.service';
import { Region } from './../../../model/region';
import { Album } from './../../../model/album';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-actions',
  templateUrl: './image-actions.component.html',
  styleUrls: ['./image-actions.component.scss']
})
export class ImageActionsComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  @Input() imageIds: string[];

  albums: Album[];
  regions: Region[];
  
  constructor(private imageService: ImageService,
              private albumService: AlbumService,
              private mapRegionsService: MapRegionsService) { }

  ngOnInit() {
    this.albumService.getAll()
      .subscribe(
        albums => {
          this.albums = albums;
          console.log(this.albums);
        },
        error => console.log('Error :: ' + error)
      );
    
    this.mapRegionsService.getAll()
    .subscribe(
        regions => {
          this.regions = regions;
          console.log(this.regions);
        },
        error => console.log('Error :: ' + error)
      );
  }
  
  addToRegion(regionId) {
    if (this.imageIds && this.imageIds.length > 0) {
      for (let id of this.imageIds) {
        this.imageService.updateImageRegion(id, regionId);

        console.log('updated image ' + id);
      }
      console.log('added ' + this.imageIds + ' to region id ' + regionId);
    }
  }
  
  addToAlbum(albumId) {
    if (this.imageIds && this.imageIds.length > 0) {
      for (let id of this.imageIds) {
        this.imageService.updateImageAlbum(id, albumId);

        console.log('updated image ' + id);
      }
      console.log('added ' + this.imageIds + ' to album id ' + albumId);
    }
  }
  
  deleteImages() {
    if (confirm('Are you sure to delete these images ')) {
     
    }
  }
}
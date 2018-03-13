import { MyImage } from './../../../model/MyImage';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Region} from './../../../model/region';
import { ActivatedRoute } from '@angular/router';
import { MapRegionsService } from './../../../service/map-regions.service';
@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
  id: number;
  Region$: Observable<Region>;
  images$: Observable<MyImage[]>;
  selectedImagesId: string[] = [];
  selected: boolean = false;

  constructor(private route: ActivatedRoute, private regionService: MapRegionsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
  });
  this.Region$ = this.regionService.getRegionWithId(this.id);
    console.log(this.Region$);
    this.images$ = this.regionService.getImagesWithRegionId(this.id);
  }

  addToSelectedList(id) {
    let index = this.selectedImagesId.indexOf(id);

    if (index !== -1) {
      this.selectedImagesId.splice(index, 1);
    } else {
      this.selectedImagesId.push(id);
    }

    console.log('current list: ' + this.selectedImagesId);
  }


}

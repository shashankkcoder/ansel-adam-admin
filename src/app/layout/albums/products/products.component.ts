import {ProductsService} from './../../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../../model/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [routerTransition()]
})
export class ProductsComponent implements OnInit {

  mapIdentfiers: Products[] = [];
  albumIdentfiers: Products[] = [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.getAllProductsByType();
  }


  getAllProductsByType() {
    this.productsService.getAllProductsByType('ALBUM').subscribe(
        identifiers => {
          const tempArr: Products[] = [];
          
          const tempAlbumArr: Products[] = [];
          identifiers.forEach(function (value) {
              tempAlbumArr.push(value);
          });
          this.albumIdentfiers = tempAlbumArr;
        },
        error => console.log('Error :: ' + error)
      );
  }
}

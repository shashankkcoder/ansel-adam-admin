import {ProductsService} from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../model/products';


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
    this.getAllProducts();
  }


  getAllProducts() {
    this.productsService.getAll().subscribe(
        identifiers => {
          debugger;
          let tempArr: Products[] = [];
          identifiers.forEach(function (value) {
            if (value.productType == 'MAP') {
              tempArr.push(value);
            }
          });
          this.mapIdentfiers = tempArr;

          let tempArr: Products[] = [];
          identifiers.forEach(function (value) {
            if (value.productType == 'ALBUM') {
              tempArr.push(value);
            }
          });
          this.albumIdentfiers = tempArr;
        },
        error => console.log('Error :: ' + error)
      );
  }
}

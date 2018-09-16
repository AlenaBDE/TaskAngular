import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {
  constructor(public service: ProductsService) {

  }

  seeAllProducts() {
    this.service.selectedGroups.men = true;
    this.service.selectedGroups.woman = true;
    this.service.selectedGroups.children = true;
  }

  comboSort(event) {
    switch (+event) {
      case 0:
        this.service.products = this.service.things.slice(0);
        break;
      case 1:
        this.service.products.sort((a, b) => {
          return a.price + b.price
        });
        break;
      case 2:
        this.service.products.sort((a, b) => {
          return a.price - b.price
        });
        break;
    }

  }

  ngOnInit() {

  }
}

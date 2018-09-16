import {Component} from '@angular/core';
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  constructor(public service: ProductsService) {
  }

  get selectedGroups() {
    return this.service.selectedGroups;
  }

  get men() {
    return this.selectedGroups.men;
  }

  get woman() {
    return this.selectedGroups.woman;
  }

  get children() {
    return this.selectedGroups.children;
  }

  title = 'angularShop';
}










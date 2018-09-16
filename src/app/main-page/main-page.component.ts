import {Component, OnInit, Input} from '@angular/core';
import {ProductsService} from "../products.service";
import * as $ from "../../../node_modules/jquery/dist/jquery.js"

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() item;

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

  ngOnInit() {

  }
}

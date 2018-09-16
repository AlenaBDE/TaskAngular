import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ProductsService} from "./products.service";
import {BackgroundImageDirective} from "./directives/backgroundImage.directive";
import { FilterCheckboxPipe } from './filter-checkbox.pipe';
import { SlickModule } from 'ngx-slick';
import { SliderBoxComponent } from './slider-box/slider-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    BackgroundImageDirective,
    FilterCheckboxPipe,
    SliderBoxComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    SlickModule.forRoot()
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider-box',
  templateUrl: './slider-box.component.html',
  styleUrls: ['./slider-box.component.css']
})
export class SliderBoxComponent {

  @Input() items: Array<any>;
  @Input() title: string;

  slickConfig = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() {
  }

}

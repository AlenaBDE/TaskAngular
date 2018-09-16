import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appImage]'
})

export class BackgroundImageDirective implements OnInit {
  constructor(private element: ElementRef){}

  ngOnInit(){
    this.element.nativeElement.style.backgroundSize = 'cover';
  }

}

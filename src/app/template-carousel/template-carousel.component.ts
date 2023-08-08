import { Component, ElementRef } from '@angular/core';
import { Carousel } from '@fancyapps/ui';


@Component({
  selector: 'app-template-carousel',
  templateUrl: './template-carousel.component.html',
  styleUrls: ['./template-carousel.component.css']
})
export class TemplateCarouselComponent {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    Carousel.bind(this.elRef.nativeElement, '#myCarousel', {
      // Custom options
      Dots: false,
      slidesPerPage: 1,
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isHorizontal: "is-horizontal",
        inTransition: "in-transition",
    }
    });
  }

  ngOnDestroy() {
  
  }
}

import { Component} from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
    selector: 's-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
  })

  export class CarouselComponent {
    protected products: any = [];
    protected responsiveOptions: boolean;

    constructor() {
      this.responsiveOptions = true;
      this.products = [{id:'1', value:'img1.jpg', name:'img1.jpg'}, {id:'2', value:'img2.jpg', name:'img2.jpg'}];
    }

  }
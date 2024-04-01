import { NgModule } from '@angular/core';
import { countdownComponent } from './components/countdown/countdown.component';
import { testComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports:      [ CommonModule, CarouselModule, ButtonModule],
  declarations: [ testComponent, countdownComponent, CarouselComponent ], //countdownComponent
  exports:      [ testComponent, countdownComponent, CarouselComponent ], //, countdownComponent
  //bootstrap:    [ testComponent ]
})
export class AppModule { }
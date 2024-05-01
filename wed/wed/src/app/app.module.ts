import { NgModule } from '@angular/core';
import { countdownComponent } from './components/countdown/countdown.component';
import { testComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MusicComponent } from './components/music/music.component';
import { PopupComponent } from './components/popup/popup.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from "primeng/timeline"; 
import { CardModule } from "primeng/card"; 

@NgModule({
  imports:      [ CommonModule, CarouselModule, ButtonModule, TimelineModule, CardModule],
  declarations: [ testComponent, countdownComponent, CarouselComponent, TimelineComponent, MusicComponent, PopupComponent ], //countdownComponent
  exports:      [ testComponent, countdownComponent, CarouselComponent, TimelineComponent, MusicComponent, PopupComponent ], //, countdownComponent
  //bootstrap:    [ testComponent ]
})
export class AppModule { }
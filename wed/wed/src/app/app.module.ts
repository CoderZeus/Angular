import { NgModule } from '@angular/core';
//import { countdownComponent } from './components/countdown/countdown.component';
import { testComponent } from './components/test/test.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports:      [ CommonModule],
  declarations: [ testComponent ], //countdownComponent
  exports:      [ testComponent ], //, countdownComponent
  //bootstrap:    [ testComponent ]
})
export class AppModule { }
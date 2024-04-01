
import { AfterViewInit, Component, Input, Output } from '@angular/core';
import moment, { Moment, now } from 'moment';
// https://stackblitz.com/edit/angular-countdown-timer-component?file=src%2Fstyles.scss
@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class countdownComponent implements AfterViewInit{

  @Input ({ required: true})
  targetDateTime: string ;
  targetMoment : Moment;
  currentTime: number;
  diff : number;

  //@Output ()
  odays: number;
  ohours: number;
  omins: number;
  osecs: number;


  constructor () {
    this.targetDateTime = "2024-05-05 10:00:00"
    this.currentTime = moment.now();
    this.targetMoment = moment(this.targetDateTime);
    this.diff = this.targetMoment.diff(now());
    
    
    this.odays = 0;
    this.ohours = 0;
    this.omins = 0;
    this.osecs = 0;

  }

  ngAfterViewInit(): void {
    setInterval(() => { this.calculateInterval();}, 1000);
  }

  private calculateInterval() {
    this.currentTime = moment.now();
    this.targetMoment = moment(this.targetDateTime);
    this.diff = this.targetMoment.diff(this.currentTime);
    // moment("").date;
   this.odays = this.targetMoment.diff(this.currentTime, 'days');
   this.ohours = this.targetMoment.diff(this.currentTime, 'hours') %24 ;
   this.omins = this.targetMoment.diff(this.currentTime, 'minutes') %60 ;
   this.osecs = this.targetMoment.diff(this.currentTime, 'seconds') %60;
  }
    
}

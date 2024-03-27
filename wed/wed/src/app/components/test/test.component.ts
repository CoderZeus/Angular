import { Component } from '@angular/core';
@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    //styleUrls: ['./test.component.css'],
  })

  export class testComponent {
    days: number;
    currentTime: number;

    constructor () {
        this.days = 0;
        this.currentTime = Date.now();
    }
  }
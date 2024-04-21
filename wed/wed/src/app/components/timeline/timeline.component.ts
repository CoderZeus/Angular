import { Component} from '@angular/core';
//import { TimeLine } from '../model/timeline';


@Component({
    selector: 'timeline-component',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
  })

  export class TimelineComponent {
   //protected items: TimeLine[];
    arr: any[]; 
    readonly events: any[] = [
        { status: 'Step 1 done', date: new Date(2022, 9, 17, 10, 30) },
        { status: 'Step 2 done', date: new Date(2022, 9, 17, 11, 0) },
        { status: 'Step 3 done', date: new Date(2022, 9, 17, 11, 30) },
      ];

    constructor() {
      //this.items = [];
      this.arr = [];
      //this.products = [{id:'1', value:'img1.jpg', name:'img1.jpg'}, {id:'2', value:'img2.jpg', name:'img2.jpg'}];
    }

    ngOnInit() { 
        this.arr = [ 
          { 
            status: "Time1", 
          }, 
          { 
            status: "Time2", 
          }, 
          { 
            status: "Time3", 
          }, 
          { 
            status: "Time4", 
          }, 
        ]; 
      } 

  }
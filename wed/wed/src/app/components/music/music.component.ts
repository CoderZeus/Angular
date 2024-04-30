import { Component} from '@angular/core';


@Component({
    selector: 'music-component',
    templateUrl: './music.component.html'
    //styleUrls: ['./music.component.scss'],
  })

  export class MusicComponent {
   status : string;

   constructor() {
    this.status = "start";
   }

   onButtonClick() {

   }

  }


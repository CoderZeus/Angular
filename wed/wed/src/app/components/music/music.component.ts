import { Component, ViewChild, ElementRef, AfterViewInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'music-component',
    templateUrl: './music.component.html'
    //styleUrls: ['./music.component.scss'],
  })

  export class MusicComponent implements OnChanges{
   //status : string;

   @Input({ required: true})
   public sPlay: boolean;
   private a: HTMLAudioElement;

   constructor() {
    //this.status = "start";
    //this.audioElement = new HTMLAudioElement();
    this.a = new Audio();
    this.a.src = "../assets/song.mp3";
    this.a.autoplay = false;
    this.a.controls = false;
    this.sPlay = false;


   }

   public ngOnChanges(changes: SimpleChanges): void {
    console.log('Audio set in changes');
    if (this.sPlay == true) {
      this.a.play();
    }
  }

  // ngAfterViewInit() {
  //   // Now you can use this.audioElement for any audio-related actions
  //   // console.log(this.audioElement);
  //   console.log('Audio set');
  //   if (this.sPlay == true) {
  //     this.a.play();
  //   }
    
  //}

  } 


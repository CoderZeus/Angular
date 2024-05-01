import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, CarouselModule],
  //template: "<h1>H1 head</h1>",
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sharath & Ananya';
  isPlaying:boolean = false;

  public trigEvent(event:boolean) {
    console.log("event triggered in app ");
    console.log(event);
    console.log("completed event triggered in app ");
    this.isPlaying = event ;
    //event.currentTarget;
    
   }
}

import { Component } from '@angular/core';
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
}

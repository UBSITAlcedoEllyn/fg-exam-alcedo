import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports : [NaviComponent, RouterOutlet]
})

export class AppComponent {
  title = 'fg-exam';
}

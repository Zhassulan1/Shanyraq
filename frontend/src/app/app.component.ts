import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {SalesComponent} from "./sales/sales.component";
import {RentsComponent} from "./rents/rents.component";
import {MainComponent} from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DetailComponent,
    SalesComponent,
    RentsComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SellFlatFormComponent } from './sell-flat-form/sell-flat-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SellFlatFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

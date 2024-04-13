import { Component } from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent {
  ads = [];
}

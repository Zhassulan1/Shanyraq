import { Component } from '@angular/core';
import {CommonModule, NgIf, NgFor} from "@angular/common";
import { Property, PropertyPlaceholder } from '../ad-models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterLink],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent {
  ads: Property[] = PropertyPlaceholder;
}

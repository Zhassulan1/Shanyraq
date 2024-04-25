import { Component, OnInit, inject } from '@angular/core';
import {CommonModule, NgIf, NgFor} from "@angular/common";
import { Property, PropertyPlaceholder, Listing } from '../ad-models';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterLink],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent implements OnInit {
  ads: Property[] = PropertyPlaceholder;
  myAds!: Property[];
  

  // propertyService: PropertyService = inject(PropertyService);
  
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    let listing: Listing[] = [];
    // this.propertyService.getListing().subscribe((myListing) => {
    //   listing = myListing;
    // });

    for (let l of listing) {
      this.ads.push(l.property);
    }
  }
}

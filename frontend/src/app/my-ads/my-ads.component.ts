import { Component, OnInit, inject } from '@angular/core';
import {CommonModule, NgIf, NgFor} from "@angular/common";
import { Property, Listing } from '../models';
import { RouterLink } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterLink],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent implements OnInit {
  // ads: Property[] = PropertyPlaceholder;
  ads!: Property[];
  

  listingService: ListingService = inject(ListingService);
  
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    let listing: Listing[] = [];
    this.listingService.getListings().subscribe((myListing) => {
      listing = myListing;
    });

    for (let l of listing) {
      this.ads.push(l.property);
    }
  }
}

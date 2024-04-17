import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Listing } from '../models';
import { LISTINGS, PROPERTIES } from '../fake-db';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  listings!: Listing[];
  loaded: boolean = false;
  type: string | null = '';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.loaded = false;
    this.listings = LISTINGS;
    this.loaded = true;

    this.route.paramMap.subscribe((params) => {
      this.type = String(params.get("listingType"))|| null;
      console.log(this.type);
     })
     
    
  }
}

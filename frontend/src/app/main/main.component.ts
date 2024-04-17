import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule,NavigationEnd } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Listing } from '../models';
import { LISTINGS } from '../fake-db';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, OnDestroy {
  listings!: Listing[];
  loaded: boolean = false;
  type: string | null= "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loaded = false;
    this.listings = LISTINGS;
    this.loaded = true;

    this.route.paramMap.subscribe((params) => {
      this.type = String(params.get("listingType"))|| null;
      console.log(this.type);
     })
     
    
  }

  ngOnDestroy(): void {}

}

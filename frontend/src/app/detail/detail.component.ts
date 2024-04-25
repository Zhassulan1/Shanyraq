import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Property} from "../models";
import { ListingService } from '../listing.service';
import { UserService } from '../user.service';
import { Listing } from '../models';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  flatSale !: Listing;
  related_offers !:Listing[];
  userId: number = 0;
  userName: string = "";
  userContact: string = "";
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    private userService: UserService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const listingId = Number(params.get('id'));
        this.loaded = false;
        this.listingService.getListing(listingId).subscribe((listing) => {
          this.flatSale = listing;
          this.userId = listing.user;
          this.userService.getUser(listing.user).subscribe((user) => {
            this.userName = user.username,
            this.userContact = user.contact_info
          }
          )
          this.loaded = true;
        })
      }
    })
    this.listingService.getListings().subscribe((listing) => {
      this.related_offers = listing.slice(0, 4);
    })
  }

  addFavorite() {
    console.log(this.userId);
    this.listingService.addFavorites(this.userId, this.flatSale.id).subscribe((listing) => {
      console.log(listing);
    } )
  }

}

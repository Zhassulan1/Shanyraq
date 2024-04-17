import { Component } from '@angular/core';
import {DetailComponent} from "../detail/detail.component";
import {FlatSale} from "../models";
import {NgModel} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    DetailComponent,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

    flats : FlatSale[] = [
      {
        id: 1,
        title: "First flat for sale",
        number_rooms: 5,
        price: 45000000,
        type_building: "BI Group",
        floor: 5,
        area: 65,

        country: "KZ",
        city: "Astana",
        address: "M.Dulatov",
        region: "RichFLats",
        number_flat: 54,
        main_photo: '1.jpg',
        photo: ['2.jpg', '3.jpg', '4.jpg'],
        description: "Please, purchase this flat",

        owner_name: "Nursat",
        owner_contact: "87474589586"
      },
    ]
}

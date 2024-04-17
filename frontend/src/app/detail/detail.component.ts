import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FlatSale} from "../models";
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
  flatSale !: FlatSale;
  related_offers !:FlatSale[];

  ngOnInit() {
    this.flatSale = {
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
    }
    this.related_offers = [{
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

}

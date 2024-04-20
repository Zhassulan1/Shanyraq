import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { Sell, Rent, SubCategories } from './ad-sub-categories';
import { SellFlatFormComponent } from '../sell-flat-form/sell-flat-form.component';
import { SellHouseFormComponent } from "../sell-house-form/sell-house-form.component";


@Component({
    selector: 'app-new-ad',
    standalone: true,
    templateUrl: './new-ad.component.html',
    styleUrl: './new-ad.component.css',
    imports: [NgIf, NgFor, CommonModule, SellFlatFormComponent, SellHouseFormComponent]
})
export class NewAdComponent {
  currentCategory: string = "";
  currentSubcategory!: SubCategories;
  categorySelected: boolean = false;
  selectedToLoad!: string;

  target!: SubCategories[] 

  SelectCategory(category: string) {
    if (category == "sell") {
      this.currentCategory = "sell";
      this.target = Sell;
    }
    else if (category == "rent") {
      this.currentCategory = "rent";
      this.target = Rent;
    }
  }

  loadFields(subcategory: SubCategories){ 
    this.categorySelected = true;
    this.selectedToLoad = this.currentCategory + "." + subcategory.item;
    alert(this.selectedToLoad)
  }

}

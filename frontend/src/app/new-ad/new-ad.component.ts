import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { Sell, Rent, SubCategories } from './ad-sub-categories';
import { SellFlatFormComponent } from '../sell-flat-form/sell-flat-form.component';


@Component({
    selector: 'app-new-ad',
    standalone: true,
    templateUrl: './new-ad.component.html',
    styleUrl: './new-ad.component.css',
    imports: [NgIf, NgFor, CommonModule, SellFlatFormComponent]
})
export class NewAdComponent {
  currentCategory: string = "";
  selectedSubcategory!: SubCategories;
  categorySelected: boolean = false;

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
  }

}

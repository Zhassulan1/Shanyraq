import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  // this.formService.submitForm(
  //   this.applyForm.value.type ?? '',
  //   this.applyForm.value.price ?? '',
  //   this.applyForm.value.area ?? '',
  //   this.applyForm.value.rooms_count ?? '',
  //   this.applyForm.value.city ?? '',
  //   this.applyForm.value.address ?? '',
  //   this.applyForm.value.description ?? '',
  //   this.applyForm.value.parameters?.building_type ?? '',
  //   this.applyForm.value.parameters?.flat_floor ?? '',
  //   this.applyForm.value.parameters?.flat_floor_total ?? '',
  //   this.applyForm.value.parameters?.area_k ?? '',
  // );

  userID: number = 123456789;

  compileAddress(
    street_subdist: string,
    district: string,
    subdistrict: string,
    number: string
  ): string {
    return district + ", " + subdistrict + ", " + number;
  }

  mainToJson(
    type: string,
    price: string,
    area: string,
    rooms_count: string,
    city: string,
    address: string,
    description: string
  ): any {
      return {
        type: type,
        price: price,
        area: area,
        rooms_count: rooms_count,
        city: city,
        address: address,
        description: description,
      } 
    
  }


  submitListing(listing: any) {
    const listingJson = JSON.stringify(listing);
    // alert(listingJson);
    console.log('listing: ', listingJson);
  }

}

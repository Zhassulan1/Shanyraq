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

  compileAddress(
    city: string,
    street_subdist: string,
    district: string,
    subdistrict: string,
    number: string
  ): string {
    return street_subdist?? (district + ", " + subdistrict)?? '' + ", " + number?? '';
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
      console.log(
        "General: ", type, price, area, rooms_count, city, address, description
      );

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

  submitForm(
    building_type: string,
    flat_floor: string,
    flat_floor_total: string,
    area_k: string
  ) {
    console.log("\nParameters: ", building_type, flat_floor, flat_floor_total, area_k);
  }
}

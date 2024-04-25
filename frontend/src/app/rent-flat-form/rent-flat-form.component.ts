import { Component, Input, OnInit, Query, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AppComponent } from '../app.component';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


import { SubCategories } from '../new-ad/ad-sub-categories';
import { DistrictInterface, Districts } from '../sell-flat-form/districts';
import { ImageUploaderService, BackendURL } from '../services/image-uploader.service';
import { FormService } from '../services/form.service';
import { Listing } from '../models';
import { ListingService } from '../listing.service';


export const SubmitURL: string = BackendURL;

@Component({
  selector: 'app-rent-flat-form',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, AppComponent, ReactiveFormsModule],
  templateUrl: './rent-flat-form.component.html',
  styleUrl: './rent-flat-form.component.css'
})
export class RentFlatFormComponent {
  @Input() userID!: number ;
  @Input() currentCategory: string = "";
  @Input() selectedSubcategory!: SubCategories;

  district: string = '';
  subdistrict!: string;
  districts: DistrictInterface[] = Districts;
  subdistricts: string[] = [];

  formService: FormService = inject(FormService);
  constructor(private listingService: ListingService) { }

  applyForm = new FormGroup({
    type: new FormControl('apartment'),
    price: new FormControl(0),
    area: new FormControl(0),
    rooms_count: new FormControl(0),
    city: new FormControl('Almaty'),
    street_subdist: new FormControl(''),
    number: new FormControl(''),
    description: new FormControl(''),

    districts: new FormControl(''),
    subdistricts: new FormControl(''),
    
    building_type: new FormControl(''),
    rent_duration: new FormControl(''),

    flat_floor: new FormControl(''),
    flat_floor_total: new FormControl(''),

    area_l: new FormControl(''),
    area_k: new FormControl(''),  
  });
 


  submitForm() {
    const address = this.formService.compileAddress(
      this.applyForm.value.street_subdist ?? '',
      this.district ?? '',
      this.subdistrict ?? '',
      this.applyForm.value.number ?? ''
    );

    const property = this.formService.mainToJson(
      1,
      this.applyForm.value.type ?? '',
      this.applyForm.value.price ?? 0,
      this.applyForm.value.area ?? 0,
      this.applyForm.value.rooms_count ?? 0,
      this.applyForm.value.city ?? '',
      address,
      this.applyForm.value.description ?? '',
    );

    property.images = [
      "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high"
   ]

    property.parameters = this.compileParameters(
      this.applyForm.value.building_type ?? '',
      this.applyForm.value.rent_duration ?? '',

      this.applyForm.value.flat_floor ?? '',
      this.applyForm.value.flat_floor_total ?? '',

      this.applyForm.value.area_l ?? '',
      this.applyForm.value.area_k ?? ''
    );

    const listing: Listing = {
      id: 0,
      user: this.userID,
      property: property,
      type: 'rent',
      listing_date: "2024-04-25"
    };

    console.log('listing: ', listing);

    this.formService.submitListing(listing);


    this.listingService.createListing(listing).subscribe(
      (listing: Listing) => {
        console.log(listing);
      });



    window.location.href = "my";
  }


  compileParameters(
    building_type: string,
    rent_duration: string,

    flat_floor: string,
    flat_floor_total: string,

    area_l: string,
    area_k: string
  ) {
    return {
      building_type: building_type,
      rent_duration: rent_duration,

      flat_floor: flat_floor,
      flat_floor_total: flat_floor_total,

      area_l: area_l,
      area_k: area_k
    }
  }


  loadSubDists(district: DistrictInterface) {
    this.subdistricts = district.subdistricts;
  }

  resetCategory() {
    location.reload();
  }
  
  imageUploaderService = inject(ImageUploaderService);
  imagesUrl: Array<string> = [];
  uploading = false;

  selectedImages!: FileList;
  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files && inputElement.files.length > 0) {
      this.selectedImages = inputElement.files;
    }
  }

  upload(): void {
    if (this.selectedImages) {
      this.uploadFiles(this.selectedImages);
    }
  }


  private uploadFiles(images: FileList) {
    this.uploading = true;
    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      this.imageUploaderService.uploadImage(element).subscribe((p) => {
        this.imagesUrl.push(p);
        this.uploading = false;
      });
    }
  }


  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event?.dataTransfer?.files) {
      this.uploadFiles(event.dataTransfer.files);
    }
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
}

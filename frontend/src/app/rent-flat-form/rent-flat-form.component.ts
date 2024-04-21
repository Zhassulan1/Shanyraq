import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AppComponent } from '../app.component';

import { SubCategories } from '../new-ad/ad-sub-categories';
import { DistrictInterface, Districts } from '../sell-flat-form/districts';
import { ImageUploaderService, BackendURL } from '../services/image-uploader.service';


export const SubmitURL: string = BackendURL;

@Component({
  selector: 'app-rent-flat-form',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, AppComponent],
  templateUrl: './rent-flat-form.component.html',
  styleUrl: './rent-flat-form.component.css'
})
export class RentFlatFormComponent {
  @Input() currentCategory: string = "";
  @Input() selectedSubcategory!: SubCategories;
  @Input() categorySelected: boolean = false;



  districtSelected: boolean = false;
  districts: DistrictInterface[] = Districts;
  selectedSubdistrict!: string;
  subdistricts: string[] = [];

  loadSubDists(district: DistrictInterface) {
    this.districtSelected = true;
    this.subdistricts = district.subdistricts;
  }

  resetCategory() {
    this.categorySelected = false;
    location.reload();
  }


  // Image upload

  
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

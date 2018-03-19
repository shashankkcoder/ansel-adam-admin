import { Injectable } from '@angular/core';

@Injectable()
export class MultiSelectService {

  selectedImageIds: string[] = [];

  constructor() { }

  setSelectedImageIds(imageIds) {
    this.selectedImageIds = imageIds;
  }

  getSelectedImageIds() {
    return this.selectedImageIds;
  }

}

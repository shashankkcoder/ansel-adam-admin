import { TestBed, inject } from '@angular/core/testing';

import { AllPhotosService } from './all-photos.service';

describe('AllPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPhotosService]
    });
  });

  it('should be created', inject([AllPhotosService], (service: AllPhotosService) => {
    expect(service).toBeTruthy();
  }));
});

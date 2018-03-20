import { TestBed, inject } from '@angular/core/testing';

import { MultiSelectService } from './multi-select.service';

describe('MultiSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiSelectService]
    });
  });

  it('should be created', inject([MultiSelectService], (service: MultiSelectService) => {
    expect(service).toBeTruthy();
  }));
});

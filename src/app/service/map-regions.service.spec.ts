import { TestBed, inject } from '@angular/core/testing';

import { MapRegionsService } from './map-regions.service';

describe('MapRegionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapRegionsService]
    });
  });

  it('should be created', inject([MapRegionsService], (service: MapRegionsService) => {
    expect(service).toBeTruthy();
  }));
});

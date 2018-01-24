import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRegionsComponent } from './map-regions.component';

describe('MapRegionsComponent', () => {
  let component: MapRegionsComponent;
  let fixture: ComponentFixture<MapRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

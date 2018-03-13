import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhotoMapComponent } from './edit-photo-map.component';

describe('EditPhotoMapComponent', () => {
  let component: EditPhotoMapComponent;
  let fixture: ComponentFixture<EditPhotoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhotoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhotoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

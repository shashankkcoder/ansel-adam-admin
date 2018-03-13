import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMapprofileComponent } from './edit-mapprofile.component';

describe('EditMapprofileComponent', () => {
  let component: EditMapprofileComponent;
  let fixture: ComponentFixture<EditMapprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMapprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMapprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

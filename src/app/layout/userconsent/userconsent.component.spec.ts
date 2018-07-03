import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsentComponent } from './userconsent.component';

describe('UserConsentComponent', () => {
  let component: UserConsentComponent;
  let fixture: ComponentFixture<UserConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

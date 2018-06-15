import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconsentComponent } from './userconsent.component';

describe('UserconsentComponent', () => {
  let component: UserconsentComponent;
  let fixture: ComponentFixture<UserconsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserconsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

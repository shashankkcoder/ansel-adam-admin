import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCheckBoxComponent } from './my-check-box.component';

describe('MyCheckBoxComponent', () => {
  let component: MyCheckBoxComponent;
  let fixture: ComponentFixture<MyCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

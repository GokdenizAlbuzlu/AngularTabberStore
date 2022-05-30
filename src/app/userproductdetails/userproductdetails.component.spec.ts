import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserproductdetailsComponent } from './userproductdetails.component';

describe('UserproductdetailsComponent', () => {
  let component: UserproductdetailsComponent;
  let fixture: ComponentFixture<UserproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserproductdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

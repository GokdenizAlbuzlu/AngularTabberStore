import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricedescComponent } from './pricedesc.component';

describe('PricedescComponent', () => {
  let component: PricedescComponent;
  let fixture: ComponentFixture<PricedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricedescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

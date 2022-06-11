import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceascComponent } from './priceasc.component';

describe('PriceascComponent', () => {
  let component: PriceascComponent;
  let fixture: ComponentFixture<PriceascComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceascComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

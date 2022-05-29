import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterasvendorComponent } from './registerasvendor.component';

describe('RegisterasvendorComponent', () => {
  let component: RegisterasvendorComponent;
  let fixture: ComponentFixture<RegisterasvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterasvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterasvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

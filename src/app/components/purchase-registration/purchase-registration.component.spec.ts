import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRegistrationComponent } from './purchase-registration.component';

describe('PurchaseRegistrationComponent', () => {
  let component: PurchaseRegistrationComponent;
  let fixture: ComponentFixture<PurchaseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

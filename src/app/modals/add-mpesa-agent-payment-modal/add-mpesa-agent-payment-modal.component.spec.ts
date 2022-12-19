import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMpesaAgentPaymentModalComponent } from './add-mpesa-agent-payment-modal.component';

describe('AddMpesaAgentPaymentModalComponent', () => {
  let component: AddMpesaAgentPaymentModalComponent;
  let fixture: ComponentFixture<AddMpesaAgentPaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMpesaAgentPaymentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMpesaAgentPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

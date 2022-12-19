import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMpesaAgentLoansModalComponent } from './upload-mpesa-agent-loans-modal.component';

describe('UploadMpesaAgentLoansModalComponent', () => {
  let component: UploadMpesaAgentLoansModalComponent;
  let fixture: ComponentFixture<UploadMpesaAgentLoansModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMpesaAgentLoansModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMpesaAgentLoansModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

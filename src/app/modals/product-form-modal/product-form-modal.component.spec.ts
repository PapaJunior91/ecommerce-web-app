import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTdrAgentModalComponent } from './product-form-modal.component';

describe('AddTdrAgentModalComponent', () => {
  let component: AddTdrAgentModalComponent;
  let fixture: ComponentFixture<AddTdrAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTdrAgentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTdrAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

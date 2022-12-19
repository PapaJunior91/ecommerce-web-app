import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTdrAgentModalComponent } from './edit-tdr-agent-modal.component';

describe('EditTdrAgentModalComponent', () => {
  let component: EditTdrAgentModalComponent;
  let fixture: ComponentFixture<EditTdrAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTdrAgentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTdrAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

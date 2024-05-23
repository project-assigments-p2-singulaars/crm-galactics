import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomersComponent } from './form-customers.component';

describe('FormCustomersComponent', () => {
  let component: FormCustomersComponent;
  let fixture: ComponentFixture<FormCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavesComponent } from './form-naves.component';

describe('FormNavesComponent', () => {
  let component: FormNavesComponent;
  let fixture: ComponentFixture<FormNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

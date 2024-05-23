import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNavesComponent } from './list-naves.component';

describe('ListNavesComponent', () => {
  let component: ListNavesComponent;
  let fixture: ComponentFixture<ListNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

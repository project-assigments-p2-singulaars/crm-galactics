import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNavesComponent } from './detail-naves.component';

describe('DetailNavesComponent', () => {
  let component: DetailNavesComponent;
  let fixture: ComponentFixture<DetailNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailNavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

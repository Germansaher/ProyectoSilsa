import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselCardComponent } from './carrusel-card.component';

describe('CarruselCardComponent', () => {
  let component: CarruselCardComponent;
  let fixture: ComponentFixture<CarruselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarruselCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

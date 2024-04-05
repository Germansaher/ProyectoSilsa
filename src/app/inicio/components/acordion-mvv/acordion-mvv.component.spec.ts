import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionMVVComponent } from './acordion-mvv.component';

describe('AcordionMVVComponent', () => {
  let component: AcordionMVVComponent;
  let fixture: ComponentFixture<AcordionMVVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcordionMVVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcordionMVVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

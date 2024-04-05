import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonteamComponent } from './botonteam.component';

describe('BotonteamComponent', () => {
  let component: BotonteamComponent;
  let fixture: ComponentFixture<BotonteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

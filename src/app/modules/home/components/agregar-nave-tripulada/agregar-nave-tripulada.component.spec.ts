import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNaveTripuladaComponent } from './agregar-nave-tripulada.component';

describe('AgregarNaveTripuladaComponent', () => {
  let component: AgregarNaveTripuladaComponent;
  let fixture: ComponentFixture<AgregarNaveTripuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNaveTripuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNaveTripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

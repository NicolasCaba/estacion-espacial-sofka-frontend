import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNaveNoTripuladaComponent } from './agregar-nave-no-tripulada.component';

describe('AgregarNaveNoTripuladaComponent', () => {
  let component: AgregarNaveNoTripuladaComponent;
  let fixture: ComponentFixture<AgregarNaveNoTripuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNaveNoTripuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNaveNoTripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

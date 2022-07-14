import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNaveLanzaderaComponent } from './agregar-nave-lanzadera.component';

describe('AgregarNaveLanzaderaComponent', () => {
  let component: AgregarNaveLanzaderaComponent;
  let fixture: ComponentFixture<AgregarNaveLanzaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNaveLanzaderaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNaveLanzaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

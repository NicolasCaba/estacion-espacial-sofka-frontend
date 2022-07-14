import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPageComponent } from './crear-page.component';

describe('CrearPageComponent', () => {
  let component: CrearPageComponent;
  let fixture: ComponentFixture<CrearPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

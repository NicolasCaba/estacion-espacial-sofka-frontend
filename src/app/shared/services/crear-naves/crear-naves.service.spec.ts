import { TestBed } from '@angular/core/testing';

import { CrearNavesService } from './crear-naves.service';

describe('CrearNavesService', () => {
  let service: CrearNavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearNavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

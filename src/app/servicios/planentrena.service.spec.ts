import { TestBed } from '@angular/core/testing';

import { PlanentrenaService } from './planentrena.service';

describe('PlanentrenaService', () => {
  let service: PlanentrenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanentrenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

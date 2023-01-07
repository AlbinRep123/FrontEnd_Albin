import { TestBed } from '@angular/core/testing';

import { PlanalimentosService } from './planalimentos.service';

describe('PlanalimentosService', () => {
  let service: PlanalimentosService; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanalimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

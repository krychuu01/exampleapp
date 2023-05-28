import { TestBed } from '@angular/core/testing';

import { CarsAddingService } from './cars-adding.service';

describe('CarsAddingService', () => {
  let service: CarsAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

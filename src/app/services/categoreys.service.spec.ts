import { TestBed } from '@angular/core/testing';

import { CategoreysService } from './categoreys.service';

describe('CategoreysService', () => {
  let service: CategoreysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoreysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

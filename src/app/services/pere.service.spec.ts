import { TestBed } from '@angular/core/testing';

import { PereService } from './pere.service';

describe('PereService', () => {
  let service: PereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

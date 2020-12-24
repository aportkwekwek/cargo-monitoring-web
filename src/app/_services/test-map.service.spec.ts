import { TestBed } from '@angular/core/testing';

import { TestMapService } from './test-map.service';

describe('TestMapService', () => {
  let service: TestMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

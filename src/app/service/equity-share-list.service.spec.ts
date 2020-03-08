import { TestBed } from '@angular/core/testing';

import { EquityShareListService } from './equity-share-list.service';

describe('EquityShareListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquityShareListService = TestBed.get(EquityShareListService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EquityShareService } from './equity-share.service';

describe('EquityShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquityShareService = TestBed.get(EquityShareService);
    expect(service).toBeTruthy();
  });
});

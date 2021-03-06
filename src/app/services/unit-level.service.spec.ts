import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UnitLevelService } from './unit-level.service';

describe('UnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UnitLevelService = TestBed.inject(UnitLevelService);
    expect(service).toBeTruthy();
  });
});

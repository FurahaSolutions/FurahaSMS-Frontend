import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ClassLevelUnitLevelAllocationService} from './class-level-unit-level-allocation.service';

describe('ClassLevelUnitLevelAllocationService', () => {
  let service: ClassLevelUnitLevelAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClassLevelUnitLevelAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

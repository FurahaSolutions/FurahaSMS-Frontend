import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {ClassLevelUnitLevelAllocationService} from './class-level-unit-level-allocation.service';

describe('ClassLevelUnitLevelAllocationService', () => {
  let service: ClassLevelUnitLevelAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FontAwesomeTestingModule
      ]
    });
    service = TestBed.inject(ClassLevelUnitLevelAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

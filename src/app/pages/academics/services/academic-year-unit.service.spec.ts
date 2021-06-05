import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AcademicYearUnitService } from './academic-year-unit.service';

describe('AcademicYearUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AcademicYearUnitService = TestBed.inject(AcademicYearUnitService);
    expect(service).toBeTruthy();
  });
});

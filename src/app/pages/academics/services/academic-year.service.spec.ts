import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AcademicYearService } from './academic-year.service';

describe('AcademicYearService', async () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AcademicYearService = TestBed.inject(AcademicYearService);
    expect(service).toBeTruthy();
  });
});

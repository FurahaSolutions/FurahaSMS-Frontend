import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UnitsService } from './units.service';

describe('SubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UnitsService = TestBed.inject(UnitsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProcurementService } from './procurement.service';

describe('ProcurementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProcurementService = TestBed.inject(ProcurementService);
    expect(service).toBeTruthy();
  });
});

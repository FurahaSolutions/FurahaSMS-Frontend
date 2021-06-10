import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ELearningService } from './e-learning.service';

describe('ELearningService', () => {
  let service: ELearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ELearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

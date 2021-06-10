import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExamPaperService } from './exam-paper.service';

describe('ExamPaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ExamPaperService = TestBed.inject(ExamPaperService);
    expect(service).toBeTruthy();
  });
});

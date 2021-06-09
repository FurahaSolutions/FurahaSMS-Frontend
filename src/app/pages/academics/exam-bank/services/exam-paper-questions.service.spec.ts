import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExamPaperQuestionsService } from './exam-paper-questions.service';

describe('ExamPaperQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ExamPaperQuestionsService = TestBed.inject(ExamPaperQuestionsService);
    expect(service).toBeTruthy();
  });
});

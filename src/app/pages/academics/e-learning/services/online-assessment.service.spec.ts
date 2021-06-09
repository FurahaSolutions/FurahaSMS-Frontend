import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { OnlineAssessmentService } from './online-assessment.service';

describe('OnlineAssessmentService', () => {
  let service: OnlineAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FontAwesomeTestingModule
      ]
    });
    service = TestBed.inject(OnlineAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

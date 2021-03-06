import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TopicNumberingService } from './topic-numbering.service';

describe('TopicNumberingService', () => {
  let service: TopicNumberingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TopicNumberingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

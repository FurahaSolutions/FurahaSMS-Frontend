import { TestBed } from '@angular/core/testing';

import { StreamService } from './stream.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StreamService = TestBed.inject(StreamService);
    expect(service).toBeTruthy();
  });
});

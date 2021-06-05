import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ClassStreamService } from './class-stream.service';

describe('ClassStreamService', () => {
  let service: ClassStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ClassStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ClassLevelService } from './class-level.service';

describe('ClassLevelService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    })
  );

  it('should be created', () => {
    const service: ClassLevelService = TestBed.inject(ClassLevelService);
    expect(service).toBeTruthy();
  });
});

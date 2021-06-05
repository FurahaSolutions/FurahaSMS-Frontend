import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LibraryUserService} from './library-user.service';

describe('LibraryUserService', () => {
  let service: LibraryUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LibraryUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

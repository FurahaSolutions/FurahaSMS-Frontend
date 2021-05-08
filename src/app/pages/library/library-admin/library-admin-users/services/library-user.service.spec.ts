import { TestBed } from '@angular/core/testing';

import { LibraryUserService } from './library-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

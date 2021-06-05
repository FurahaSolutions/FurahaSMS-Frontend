import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryBookTagService } from './library-book-tag.service';

describe('LibraryBookTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryBookTagService = TestBed.inject(LibraryBookTagService);
    expect(service).toBeTruthy();
  });
});

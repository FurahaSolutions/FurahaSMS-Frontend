import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryBookService } from './library-book.service';

describe('LibraryBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryBookService = TestBed.inject(LibraryBookService);
    expect(service).toBeTruthy();
  });
});

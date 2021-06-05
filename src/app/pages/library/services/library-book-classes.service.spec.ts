import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryBookClassesService } from './library-book-classes.service';

describe('LibraryBookClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryBookClassesService = TestBed.inject(LibraryBookClassesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { LibraryBookClassesService } from './library-book-classes.service';

describe('LibraryBookClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      FontAwesomeTestingModule
    ]
  }));

  it('should be created', () => {
    const service: LibraryBookClassesService = TestBed.inject(LibraryBookClassesService);
    expect(service).toBeTruthy();
  });
});

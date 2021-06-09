import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {LibraryUserService} from './library-user.service';

describe('LibraryUserService', () => {
  let service: LibraryUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FontAwesomeTestingModule
      ]
    });
    service = TestBed.inject(LibraryUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

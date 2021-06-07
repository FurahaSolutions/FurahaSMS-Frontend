import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { CreateUnitComponent } from '../../academics/curriculum/create-unit/create-unit.component';
import { LibraryAuthorService } from './library-author.service';

describe('LibraryAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      FontAwesomeTestingModule
    ],
    declarations: [CreateUnitComponent]
  }));

  it('should be created', () => {
    const service: LibraryAuthorService = TestBed.inject(LibraryAuthorService);
    expect(service).toBeTruthy();
  });
});

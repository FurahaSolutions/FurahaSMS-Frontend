import { TestBed } from '@angular/core/testing';

import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { DbService } from './db.service';

describe('DbService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FontAwesomeTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DbService = TestBed.inject(DbService);
    expect(service).toBeTruthy();
  });
});

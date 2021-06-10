import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { StudyMaterialsService } from './study-materials.service';

describe('StudyMaterialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      FontAwesomeTestingModule
    ]
  }));

  it('should be created', () => {
    const service: StudyMaterialsService = TestBed.inject(StudyMaterialsService);
    expect(service).toBeTruthy();
  });
});

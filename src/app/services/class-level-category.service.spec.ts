import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClassLevelCategoryService } from './class-level-category.service';

describe('ClassLevelCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ClassLevelCategoryService = TestBed.inject(ClassLevelCategoryService);
    expect(service).toBeTruthy();
  });
});

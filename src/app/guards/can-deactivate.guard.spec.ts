import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate.guard';

describe('CanDeactivateGuard', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard]
    });
  }));

  it('should create', inject([CanDeactivateGuard], (guard: CanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

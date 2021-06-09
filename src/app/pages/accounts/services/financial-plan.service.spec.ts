import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import { FinancialPlanService } from './financial-plan.service';

describe('FinancialPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, AppStarLabelRequiredModule]
  }));

  it('should be created', () => {
    const service: FinancialPlanService = TestBed.inject(FinancialPlanService);
    expect(service).toBeTruthy();
  });
});

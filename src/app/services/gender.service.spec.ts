import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { reducerProvider, REDUCER_TOKEN, metaReducers } from '../store/reducers';
import { AppValidateSubmitButtonsModule } from '../components/validate-submit-buttons/validate-submit-buttons.module';
import { GenderService } from './gender.service';

describe('GenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [reducerProvider],
    imports: [
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
      HttpClientTestingModule,
      AppValidateSubmitButtonsModule
    ]
  }));

  it('should be created', () => {
    const service: GenderService = TestBed.inject(GenderService);
    expect(service).toBeTruthy();
  });
});

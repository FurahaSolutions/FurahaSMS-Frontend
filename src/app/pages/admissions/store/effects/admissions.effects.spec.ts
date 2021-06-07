import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AdmissionsEffects } from './admissions.effects';

describe('AdmissionsEffects', () => {
  let actions$: Observable<any>;
  let effects: AdmissionsEffects;

  beforeEach(() => {
    actions$ = of(null);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FontAwesomeTestingModule
      ],
      providers: [
        reducerProvider,
        AdmissionsEffects,
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.inject<AdmissionsEffects>(AdmissionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

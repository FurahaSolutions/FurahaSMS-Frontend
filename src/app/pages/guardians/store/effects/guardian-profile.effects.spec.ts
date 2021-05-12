import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { GuardianProfileEffects } from './guardian-profile.effects';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { metaReducers, REDUCER_TOKEN, reducerProvider } from "../../../../store/reducers";
import { guardianProfileFeatureKey, reducer } from "../reducers/guardian-profile.reducer";

describe('GuardianProfileEffects', () => {
  const actions$: Observable<any> = of('Load');
  let effects: GuardianProfileEffects;

  beforeEach(() => {
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
        StoreModule.forFeature(guardianProfileFeatureKey, reducer),
      ],
      providers: [
        reducerProvider,
        GuardianProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<GuardianProfileEffects>(GuardianProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import { MyProfileEffects } from './my-profile.effects';

describe('MyProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: MyProfileEffects;

  beforeEach(() => {
    actions$ = of({});
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
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        FontAwesomeModule
      ],
      providers: [
        reducerProvider,
        MyProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<MyProfileEffects>(MyProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

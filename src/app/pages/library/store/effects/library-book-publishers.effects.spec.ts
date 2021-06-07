import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { LibraryBookPublisherEffects } from './library-book-publishers.effects';

describe('LibraryEffects', () => {
  const actions$: Observable<any> = of(1);
  let effects: LibraryBookPublisherEffects;

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
        FontAwesomeTestingModule
      ],
      providers: [
        reducerProvider,
        LibraryBookPublisherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<LibraryBookPublisherEffects>(LibraryBookPublisherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

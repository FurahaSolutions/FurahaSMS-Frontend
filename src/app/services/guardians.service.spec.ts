import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../store/reducers';
import { GuardiansService } from './guardians.service';

describe('GuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    ],
    providers: [
      reducerProvider
    ]
  }));

  it('should be created', () => {
    const service: GuardiansService = TestBed.inject(GuardiansService);
    expect(service).toBeTruthy();
  });
});

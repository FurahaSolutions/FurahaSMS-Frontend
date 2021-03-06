import { TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from '../store/reducers';
import { LinkService } from './link.service';

describe('LinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
      FontAwesomeTestingModule
    ],
    providers: [reducerProvider],
  }));

  it('should be created', () => {
    const service: LinkService = TestBed.inject(LinkService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { RolesAndPermissionsService } from './roles-and-permissions.service';

describe('RolesAndPermissionsService', () => {
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
      FontAwesomeTestingModule
    ],
    providers: [reducerProvider]
  }));

  it('should be created', () => {
    const service: RolesAndPermissionsService = TestBed.inject(RolesAndPermissionsService);
    expect(service).toBeTruthy();
  });
});

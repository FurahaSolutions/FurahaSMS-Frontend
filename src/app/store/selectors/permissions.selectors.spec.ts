import {selectAppPermissionsState} from './permissions.selectors';
import {permissionsFeatureKey} from '../reducers/permissions.reducer';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN} from '../reducers';
import {reducers} from '../reducers/app.reducer';


describe('Permissions Selectors', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('app', reducers),
        ]
    });
  }));
  it('should select the feature state', () => {


    const result = selectAppPermissionsState({
      [permissionsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

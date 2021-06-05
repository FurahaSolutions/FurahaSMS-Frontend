import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../reducers';
import { reducers } from '../reducers/app.reducer';
import { selectAppPermissionsState } from './permissions.selectors';


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
        StoreModule.forFeature('app', reducers)
      ],
      providers: [
        reducerProvider
      ]
    });
    TestBed.compileComponents();
  }));
  it('should select the feature state', () => {
    const result = selectAppPermissionsState({
      [permissionsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

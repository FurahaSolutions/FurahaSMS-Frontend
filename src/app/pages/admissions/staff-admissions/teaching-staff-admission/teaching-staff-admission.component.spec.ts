import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {myProfileFeatureKey, reducer} from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../../../store/reducers/app.reducer';
import {TeachingStaffAdmissionComponent} from './teaching-staff-admission.component';

describe('TeachingStaffAdmissionComponent', () => {
  let component: TeachingStaffAdmissionComponent;
  let fixture: ComponentFixture<TeachingStaffAdmissionComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
        RouterTestingModule.withRoutes([]),
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        AppLinksModule
      ],
      declarations: [TeachingStaffAdmissionComponent],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingStaffAdmissionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

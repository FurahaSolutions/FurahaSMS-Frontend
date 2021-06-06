import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { myProfileFeatureKey, reducer } from '../../my-profile/store/reducers/my-profile.reducer';
import { appFeatureKey, reducers } from '../../../store/reducers/app.reducer';
import { AppLoadingBubbleModule } from '../../../modules/app-loading-bubble';
import { AppCheckboxModule } from '../../../shared/checkbox/checkbox.module';
import { AcademicYearComponent } from './academic-year.component';

describe('AcademicYearComponent', () => {
  let component: AcademicYearComponent;
  let fixture: ComponentFixture<AcademicYearComponent>;
  let store: Store<AppState>;

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
        RouterTestingModule.withRoutes([]),
        AppLinksModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
        HttpClientTestingModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule,
        AppCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        FontAwesomeTestingModule
      ],
      declarations: [AcademicYearComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

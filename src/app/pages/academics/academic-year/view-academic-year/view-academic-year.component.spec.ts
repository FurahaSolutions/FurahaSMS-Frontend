import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { of } from 'rxjs';
import { myProfileFeatureKey, reducer } from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ViewAcademicYearComponent } from './view-academic-year.component';

describe('ViewAcademicYearComponent', () => {
  let component: ViewAcademicYearComponent;
  let fixture: ComponentFixture<ViewAcademicYearComponent>;
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
        HttpClientTestingModule,
        AppLinksModule,
        AppLoadingBubbleModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        ViewAcademicYearComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({get: () => 1})
          }
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

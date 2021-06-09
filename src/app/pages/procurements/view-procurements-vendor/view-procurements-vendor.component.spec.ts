import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { AppValidateSubmitButtonsModule } from '../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { ViewProcurementsVendorComponent } from './view-procurements-vendor.component';
// import { Router } from '@angular/router';

describe('ViewProcurementsVendorComponent', () => {
  let component: ViewProcurementsVendorComponent;
  let fixture: ComponentFixture<ViewProcurementsVendorComponent>;
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
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveComponentModule,
        FontAwesomeTestingModule,
        AppValidateSubmitButtonsModule
      ],
      declarations: [ViewProcurementsVendorComponent, LoadingBubbleComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => 1
            })
          }
        }]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementsVendorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

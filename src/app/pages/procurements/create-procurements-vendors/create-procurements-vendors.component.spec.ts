import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {TelInputComponent} from '../../../components/tel-input/tel-input.component';
import {InputComponent} from '../../../components/input/input.component';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import { TabErrorStateModule } from '../../../components/tab-error-state/app-tab-error.module';
import { AppValidateSubmitButtonsModule } from '../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {CreateProcurementsVendorsComponent} from './create-procurements-vendors.component';

describe('CreateProcurementsVendorsComponent', () => {
  let component: CreateProcurementsVendorsComponent;
  let fixture: ComponentFixture<CreateProcurementsVendorsComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        TabsModule.forRoot(),
        NgSelectModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule,
        TabErrorStateModule,
        AppValidateSubmitButtonsModule
      ],
      declarations: [
        CreateProcurementsVendorsComponent,
        LoadingBubbleComponent,
        InputComponent,
        TelInputComponent,

      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    spyOn(document, 'querySelector').and.callThrough();
    fixture = TestBed.createComponent(CreateProcurementsVendorsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

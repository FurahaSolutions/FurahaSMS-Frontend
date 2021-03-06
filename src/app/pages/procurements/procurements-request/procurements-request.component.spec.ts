import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { SelectComponent } from '../../../components/select/select.component';
import { InputComponent } from '../../../components/input/input.component';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { ValidateSubmitButtonsComponent } from '../../../components/validate-submit-buttons/validate-submit-buttons.component';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { AppStarLabelRequiredModule } from '../../../components/label-star-required/app-star-label-required';
import { ProcurementsRequestComponent } from './procurements-request.component';

describe('ProcurementsRequestComponent', () => {
  let component: ProcurementsRequestComponent;
  let fixture: ComponentFixture<ProcurementsRequestComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStarLabelRequiredModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormErrorsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        ProcurementsRequestComponent,
        SelectComponent,
        InputComponent,
        LoadingBubbleComponent,
        ValidateSubmitButtonsComponent,

      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementsRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

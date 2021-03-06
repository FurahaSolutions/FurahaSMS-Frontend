import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AppCheckboxModule } from '../../../../shared/checkbox/checkbox.module';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { LibraryMyAccountComponent } from './library-my-account.component';
import { myProfileFeatureKey, reducer} from "../../../my-profile/store/reducers/my-profile.reducer";

describe('LibraryMyAccountComponent', () => {
  let component: LibraryMyAccountComponent;
  let fixture: ComponentFixture<LibraryMyAccountComponent>;
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
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        AppValidateSubmitButtonsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        AppCheckboxModule,
        ReactiveComponentModule,
        AppLoadingBubbleModule,
        FontAwesomeTestingModule
      ],
      declarations: [LibraryMyAccountComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMyAccountComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

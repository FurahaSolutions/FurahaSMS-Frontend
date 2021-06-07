import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {AppStarLabelRequiredModule} from '../../../../components/label-star-required/app-star-label-required';
import {SelectComponent} from '../../../../components/select/select.component';
import {InputComponent} from '../../../../components/input/input.component';
import {ErrorComponent} from '../../../../components/error/error.component';
import {CrudComponent} from '../../../../components/crud/crud.component';
import {CreateClassLevelComponent} from './create-class-level.component';

describe('CreateClassLevelComponent', () => {
  let component: CreateClassLevelComponent;
  let fixture: ComponentFixture<CreateClassLevelComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        EditorModule,
        AppValidateSubmitButtonsModule,
        AppLoadingBubbleModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        CreateClassLevelComponent,
        CrudComponent,
        ErrorComponent,
        InputComponent,
        SelectComponent
      ],
      providers: [reducerProvider, { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],

    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

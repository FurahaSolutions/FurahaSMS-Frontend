import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StoreModule, Store} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {reducer} from 'src/app/pages/support-staffs/store/reducers/support-staff.reducer';
import {AppTelInputModule} from 'src/app/components/tel-input/app-tel-input.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {CreateTeacherComponent} from '../../create-teacher/create-teacher.component';
import {CreateStaffComponent} from './create-staff.component';

describe('CreateStaffComponent', () => {
  let component: CreateStaffComponent;
  let fixture: ComponentFixture<CreateStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('admissions', reducer),
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppTelInputModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => of({}),
            dispatch: () => ({})
          }
        }
      ],
      declarations: [CreateStaffComponent, CreateTeacherComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(document, 'querySelector').and.returnValue(document.createElement('div'));
    fixture = TestBed.createComponent(CreateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModule } from 'src/app/components/error/error.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AppStarLabelRequiredModule } from '../../../components/label-star-required/app-star-label-required';
import { FullWithCenterComponent } from '../../../components/full-with-center/full-with-center.component';
import { InputComponent } from '../../../components/input/input.component';
import { LoginResetComponent } from './login-reset.component';

describe('LoginResetComponent', () => {
  let component: LoginResetComponent;
  let fixture: ComponentFixture<LoginResetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ErrorModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppStarLabelRequiredModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [LoginResetComponent, FullWithCenterComponent, InputComponent],
      providers: [
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as function submitPasswordResetForm', () => {
    fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitPasswordResetForm();
    expect(component).toBeTruthy();
    (component.passwordResetForm.get('email') as FormControl).setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitPasswordResetForm();
  });
});

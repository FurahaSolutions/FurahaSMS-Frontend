import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { InputComponent } from '../../../components/input/input.component';
import { FullWithCenterComponent } from '../../../components/full-with-center/full-with-center.component';
import { AppStarLabelRequiredModule } from '../../../components/label-star-required/app-star-label-required';
import { LoginContactAdminComponent } from './login-contact-admin.component';

describe('LoginContactAdminComponent', () => {
  let component: LoginContactAdminComponent;
  let fixture: ComponentFixture<LoginContactAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppStarLabelRequiredModule,
        ReactiveFormsModule, HttpClientTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [LoginContactAdminComponent, FullWithCenterComponent, InputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as function submitLoginContactAdminForm', () => {
    fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
    expect(component).toBeTruthy();
    (component.loginContactAdminForm.get('email') as FormControl).setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
  });
});

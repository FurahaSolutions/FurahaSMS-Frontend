import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmailValidatorDirective } from 'src/app/shared/validators/email-validator/email.validator';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-login-reset',
  templateUrl: './login-reset.component.html',
  styleUrls: ['./login-reset.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginResetComponent extends subscribedContainerMixin(formMixin()) {
  faEnvelope = faEnvelope;
  faSpinner = faSpinner;
  faSave = faSave;
  passwordResetForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, new EmailValidatorDirective()]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    super();
  }

  submitPasswordResetForm() {
    this.submitInProgressSubject$.next(true);
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe({
          next: () => this.router.navigate(['/login', 'token'], {queryParamsHandling: 'preserve'}).then(),
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.passwordResetForm.get('email')?.markAsTouched();
    }
  }
}

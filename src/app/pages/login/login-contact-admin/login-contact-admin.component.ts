import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppFormService } from 'src/app/services/AppForm.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-login-contact-admin',
  templateUrl: './login-contact-admin.component.html',
  styleUrls: ['./login-contact-admin.component.css']
})
export class LoginContactAdminComponent {
  loginContactAdminForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  errors: { email: string | null } = {
    email: null
  };
  faEnvelope = faEnvelope;

  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private authService: AuthenticationService
  ) {
  }

  get email(): FormControl {
    return this.loginContactAdminForm.get('email') as FormControl;
  }

  submitLoginContactAdminForm() {
    if (this.loginContactAdminForm.valid) {
      this.authService.contactAdmin({email: this.email.value}).subscribe((success) => {
        alert(success.message);
      });
    } else {
      this.email.markAsTouched();
    }
  }
}

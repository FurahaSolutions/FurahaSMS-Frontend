import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorModule } from 'src/app/components/error/error.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { LoginPasswordChangeComponent } from './login-password-change.component';
import { LoginPasswordChangeRoutingModule } from './login-password-change-routing.module';

@NgModule({
  declarations: [LoginPasswordChangeComponent],
  imports: [
    CommonModule,
    LoginPasswordChangeRoutingModule,
    ErrorModule,
    AppLayoutModule,
    PasswordChangeFormModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class LoginPasswordChangeModule {
}

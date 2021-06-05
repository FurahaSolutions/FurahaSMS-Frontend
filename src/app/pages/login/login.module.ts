import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppCheckboxModule } from '../../shared/checkbox/checkbox.module';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginContactAdminComponent,
    LoginResetComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    AppInputModule,
    AppLayoutModule,
    ErrorModule,
    ReactiveComponentModule,
    FontAwesomeModule,
    AppCheckboxModule

  ],
  exports: []
})
export class LoginModule {
}

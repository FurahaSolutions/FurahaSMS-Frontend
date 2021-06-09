import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppInputModule } from '../../../components/input/app-input.module';
import { UserPasswordResetComponent } from './user-password-reset.component';

@NgModule({
  declarations: [
    UserPasswordResetComponent
  ],
  imports: [
    CommonModule,
    ErrorModule,
    AppInputModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class UserPasswordResetModule {
}

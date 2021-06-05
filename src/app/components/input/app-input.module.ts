import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordMeterModule } from 'src/app/pages/login/password-meter/password-meter.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectComponent } from '../select/select.component';
import { ShowPasswordDirective } from './directives/show-password.directive';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ShowPasswordDirective
  ],
  exports: [
    InputComponent,
    SelectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PasswordMeterModule,
    ReactiveComponentModule,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule
  ]
})
export class AppInputModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { PasswordMeterModule } from 'src/app/pages/login/password-meter/password-meter.module';
import { ShowPasswordDirective } from './directives/show-password.directive';
import { ReactiveComponentModule } from '@ngrx/component';
import { SelectComponent } from '../select/select.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormErrorsModule } from '../../shared/form-errors/form-errors.module';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';


@NgModule({
  imports: [
    CommonModule,
    FormErrorsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  declarations: [ValidateSubmitButtonsComponent],
  exports: [ValidateSubmitButtonsComponent]

})

export class AppValidateSubmitButtonsModule {
}

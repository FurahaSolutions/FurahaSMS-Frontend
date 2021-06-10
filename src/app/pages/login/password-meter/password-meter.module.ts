import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { PasswordMeterComponent } from './password-meter.component';


@NgModule({
  declarations: [PasswordMeterComponent],
  exports: [PasswordMeterComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class PasswordMeterModule {
}

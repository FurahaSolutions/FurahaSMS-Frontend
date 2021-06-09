import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TelInputComponent } from './tel-input.component';


@NgModule({
  declarations: [
    TelInputComponent
  ],
  exports: [
    TelInputComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class AppTelInputModule { }

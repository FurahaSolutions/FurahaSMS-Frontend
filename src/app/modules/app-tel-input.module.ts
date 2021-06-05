import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { TelInputComponent } from '../components/tel-input/tel-input.component';


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
    ReactiveComponentModule
  ]
})
export class AppTelInputModule { }

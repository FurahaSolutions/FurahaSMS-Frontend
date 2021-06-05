import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { OrdinalPipe } from '../pipes/ordinal.pipe';


@NgModule({
  declarations: [
    OrdinalPipe
  ],
  exports: [
    OrdinalPipe
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppOrdinalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';
import { PrintRoutingModule } from './print-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrintRoutingModule,
    ReactiveComponentModule
  ]
})
export class PrintModule {
}

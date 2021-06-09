import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';
import { InfrastructuresRoutingModule } from './infrastructures-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfrastructuresRoutingModule,
    ReactiveComponentModule
  ]
})
export class InfrastructuresModule { }

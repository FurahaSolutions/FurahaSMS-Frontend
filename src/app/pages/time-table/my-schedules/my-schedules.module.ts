import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';
import { MySchedulesRoutingModule } from './my-schedules-routing.module';
import { MySchedulesComponent } from './my-schedules.component';


@NgModule({
  declarations: [MySchedulesComponent],
  imports: [
    CommonModule,
    MySchedulesRoutingModule,
    ReactiveComponentModule
  ]
})
export class MySchedulesModule { }

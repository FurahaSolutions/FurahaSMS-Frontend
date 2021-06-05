import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class ReportsModule { }

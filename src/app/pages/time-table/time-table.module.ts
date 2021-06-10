import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { TimeTableComponent } from './time-table.component';
import { TimeTableRoutingModule } from './time-table-routing.module';


@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class TimeTableModule { }

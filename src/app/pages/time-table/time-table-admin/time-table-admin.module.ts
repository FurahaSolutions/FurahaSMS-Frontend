import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTimingTemplateComponent } from './create-timing-template/create-timing-template.component';
import { TimeTableTimingsComponent } from './time-table-timings/time-table-timings.component';
import { TimeTableAdminComponent } from './time-table-admin.component';
import { TimeTableAdminRoutingModule } from './time-table-admin-routing.module';


@NgModule({
  declarations: [TimeTableAdminComponent, TimeTableTimingsComponent, CreateTimingTemplateComponent],
  imports: [
    CommonModule,
    TimeTableAdminRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class TimeTableAdminModule { }

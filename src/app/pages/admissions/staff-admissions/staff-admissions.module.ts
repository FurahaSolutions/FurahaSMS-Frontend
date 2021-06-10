import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppTelInputModule } from 'src/app/components/tel-input/app-tel-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateStaffComponent } from './support-staff-admission/create-staff/create-staff.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { StaffRoutingModule } from './staff-admissions-routing.module';


@NgModule({
  declarations: [
    CreateTeacherComponent,
    EditTeacherComponent,
    TeachingStaffAdmissionComponent,
    SupportStaffAdmissionComponent,
    CreateStaffComponent

  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    AppLinksModule,
    AppInputModule,
    AppTelInputModule,
    NgSelectModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class StaffAdmissionsModule { }

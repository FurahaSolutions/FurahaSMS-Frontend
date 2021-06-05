import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSearchModule } from 'src/app/components/student-search/student-search.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppStarLabelRequiredModule } from 'src/app/components/label-star-required/app-star-label-required';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppRecentlyCreatedStudent } from './students-recently-created/students-recently-created.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentAdmissionsRoutingModule } from './student-admissions-routing.module';



@NgModule({
  declarations: [
    StudentAdmissionsEditComponent,
    CreateStudentComponent,
    EditStudentComponent,
    StudentAdmissionComponent,
  ],
  imports: [
    CommonModule,
    StudentAdmissionsRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppStarLabelRequiredModule,
    AppLinksModule,
    AppRecentlyCreatedStudent,
    StudentSearchModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class StudentAdmissionsModule { }

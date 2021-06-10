import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import {AppCheckboxModule} from '../../../shared/checkbox/checkbox.module';
import {AppValidateSubmitButtonsModule} from '../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { ManageTeacherSubjectRoutingModule } from './manage-teacher-subject-routing.module';
import { ManageTeacherSubjectComponent } from './manage-teacher-subject.component';


@NgModule({
  declarations: [ManageTeacherSubjectComponent],
  imports: [
    CommonModule,
    ManageTeacherSubjectRoutingModule,
    ReactiveFormsModule,
    AppCheckboxModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class ManageTeacherSubjectModule { }

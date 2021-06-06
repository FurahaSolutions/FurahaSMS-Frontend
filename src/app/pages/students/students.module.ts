import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppTelInputModule } from 'src/app/components/tel-input/app-tel-input.module';
import { AppOrdinalModule } from 'src/app/modules/app-ordinal.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppCheckboxModule } from '../../shared/checkbox/checkbox.module';
import { StudentsRoutingModule } from './students-routing.module';
import { CreateStudentGuardianComponent } from './create-student-guardian/create-student-guardian.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from './view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './view-student-academics/view-student-academics.component';
import { CreateStudentAcademicsComponent } from './create-student-academics/create-student-academics.component';
import * as fromStudentProfile from './store/reducers/student-profile.reducer';
import { StudentProfileEffects } from './store/effects/student-profile.effects';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { EditStudentAcademicsComponent } from './edit-student-academics/edit-student-academics.component';

@NgModule({
  declarations: [
    CreateStudentGuardianComponent,
    ViewStudentComponent,
    ViewStudentInfoComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
    CreateStudentAcademicsComponent,
    EditStudentAcademicsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppTelInputModule,
    AppOrdinalModule,
    AppLoadingBubbleModule,
    AppUserProfileModule,
    StoreModule.forFeature(fromStudentProfile.studentProfileFeatureKey, fromStudentProfile.reducer),
    EffectsModule.forFeature([StudentProfileEffects]),
    AppUserProfileModule,
    AppValidateSubmitButtonsModule,
    StudentDashboardModule,
    AppCheckboxModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class StudentsModule { }

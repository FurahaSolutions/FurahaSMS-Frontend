import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersDashboardComponent } from './teachers-dashboard/teachers-dashboard.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { ViewTeacherInfoComponent } from './view-teacher-info/view-teacher-info.component';
import { ViewTeacherSubjectsComponent } from './view-teacher-subjects/view-teacher-subjects.component';
import * as fromTeacherProfile from './store/reducers/teacher-profile.reducer';
import { TeacherProfileEffects } from './store/effects/teacher-profile.effects';


@NgModule({
declarations: [TeachersDashboardComponent, ViewTeacherComponent, ViewTeacherInfoComponent, ViewTeacherSubjectsComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
    StoreModule.forFeature(fromTeacherProfile.teacherProfileFeatureKey, fromTeacherProfile.reducer),
    EffectsModule.forFeature([TeacherProfileEffects]),
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class TeachersModule { }

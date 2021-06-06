import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import {DurationModule} from '../../../../shared/duration/duration.module';
import { TopicOnlineAssessmentListComponent } from './topic-online-assessment-list.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [TopicOnlineAssessmentListComponent],
  exports: [
    TopicOnlineAssessmentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DurationModule,
    FormsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class TopicOnlineAssessmentListModule { }

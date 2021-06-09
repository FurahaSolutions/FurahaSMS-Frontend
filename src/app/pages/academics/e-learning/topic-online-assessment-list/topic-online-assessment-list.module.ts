import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DurationModule} from '../../../../shared/duration/duration.module';
import { TabErrorStateModule } from '../../../../components/tab-error-state/app-tab-error.module';
import { TopicOnlineAssessmentListComponent } from './topic-online-assessment-list.component';



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
    FontAwesomeModule,
    TabErrorStateModule
  ]
})
export class TopicOnlineAssessmentListModule { }

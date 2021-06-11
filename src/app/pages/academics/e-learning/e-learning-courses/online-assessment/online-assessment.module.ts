import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationModule } from '../../../../../shared/duration/duration.module';
import { AppLoadingBubbleModule } from '../../../../../modules/app-loading-bubble';
import { CountDownTimerModule } from '../../count-down-timer/count-down-timer.module';
import { AppCheckboxModule } from '../../../../../shared/checkbox/checkbox.module';
import { OnlineAssessmentRoutingModule } from './online-assessment-routing.module';
import { TakeOnlineExamDashboardComponent } from './take-online-exam-dashboard/take-online-exam-dashboard.component';
import { TakeOnlineTestComponent } from './take-online-test/take-online-test.component';
import { QuestionViewComponent } from './question-view/question-view.component';


@NgModule({
  declarations: [TakeOnlineExamDashboardComponent, TakeOnlineTestComponent, QuestionViewComponent],
  imports: [
    CommonModule,
    OnlineAssessmentRoutingModule,
    DurationModule,
    RouterModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule,
    CountDownTimerModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AppCheckboxModule
  ]
})
export class OnlineAssessmentModule {
}

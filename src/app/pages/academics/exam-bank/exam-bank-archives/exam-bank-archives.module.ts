import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExamBankArchivesRoutingModule } from './exam-bank-archives-routing.module';
import { ExamBankArchivesComponent } from './exam-bank-archives.component';
import { ExamRevisionModeComponent } from './exam-revision-mode/exam-revision-mode.component';
import { ExamViewModeComponent } from './exam-view-mode/exam-view-mode.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewQuestionRevisionModeComponent } from './view-question-revision-mode/view-question-revision-mode.component';


@NgModule({
  declarations: [
    ExamBankArchivesComponent,
    ExamRevisionModeComponent,
    ExamViewModeComponent,
    ViewExamComponent,
    ViewQuestionRevisionModeComponent
  ],
  imports: [
    CommonModule,
    ExamBankArchivesRoutingModule,
    AppLoadingBubbleModule,
    Number2AlphabetModule,
    AppCheckboxModule,
    FormsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class ExamBankArchivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { ExamPaperEffects } from './store/effects/exam-paper.effects';
import * as fromExamPaper from './store/reducers/exam-paper.reducer';
import { ExamBankDashboardComponent } from './exam-bank-dashboard/exam-bank-dashboard.component';
import { ExamBankRoutingModule } from './exam-bank-routing.module';


@NgModule({
  declarations: [
    ExamBankDashboardComponent,
  ],
  imports: [
    CommonModule,
    ExamBankRoutingModule,
    AppLinksModule,
    StoreModule.forFeature(fromExamPaper.examPaperFeatureKey, fromExamPaper.reducer),
    EffectsModule.forFeature([ExamPaperEffects]),
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class ExamBankModule { }

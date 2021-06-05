import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { AdminExamPaperEditComponent } from './admin-exam-paper-edit/admin-exam-paper-edit.component';
import { AdminExamPaperComponent } from './admin-exam-paper/admin-exam-paper.component';
import { AdminExamPaperViewComponent } from './admin-exam-paper-view/admin-exam-paper-view.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamBankAdminComponent } from './exam-bank-admin.component';
import { ExamBankAdminRoutingModule } from './exam-bank-admin-routing.module';


@NgModule({
  declarations: [
    ExamBankAdminComponent,
    CreateExamComponent,
    AdminExamPaperViewComponent,
    AdminExamPaperComponent,
    AdminExamPaperEditComponent,
    QuestionViewComponent
  ],
  imports: [
    CommonModule,
    ExamBankAdminRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot(),
    EditorModule,
    Number2AlphabetModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ]
})
export class ExamBankAdminModule { }

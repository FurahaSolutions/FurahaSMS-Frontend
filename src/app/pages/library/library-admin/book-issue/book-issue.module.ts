import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookIssueComponent } from './book-issue.component';
import { RouterModule } from "@angular/router";
import { AppInputModule } from "../../../../components/input/app-input.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppValidateSubmitButtonsModule } from "../../../../components/validate-submit-buttons/validate-submit-buttons.module";


@NgModule({
  declarations: [
    BookIssueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookIssueComponent
      }
    ]),
    AppInputModule,
    ReactiveFormsModule,
    AppValidateSubmitButtonsModule,
    AppValidateSubmitButtonsModule
  ]
})
export class BookIssueModule {
}

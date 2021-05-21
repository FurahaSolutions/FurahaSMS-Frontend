import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookIssueComponent } from './book-issue.component';
import { RouterModule } from '@angular/router';
import { AppInputModule } from '../../../../components/input/app-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { SelectLibraryUserModule } from '../select-library-user/select-library-user.module';
import { SelectLibraryBookRefModule } from '../select-library-book-ref/select-library-book-ref.module';


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
    AppValidateSubmitButtonsModule,
    SelectLibraryUserModule,
    SelectLibraryBookRefModule
  ]
})
export class BookIssueModule {
}

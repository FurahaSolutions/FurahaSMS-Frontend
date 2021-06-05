import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SelectLibraryBookRefModule } from '../select-library-book-ref/select-library-book-ref.module';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { BookReturnComponent } from './book-return.component';
import { BookReturnRoutingModule } from './book-return-routing.module';


@NgModule({
  declarations: [
    BookReturnComponent
  ],
  imports: [
    CommonModule,
    BookReturnRoutingModule,
    ReactiveFormsModule,
    SelectLibraryBookRefModule,
    AppValidateSubmitButtonsModule
  ]
})
export class BookReturnModule {
}

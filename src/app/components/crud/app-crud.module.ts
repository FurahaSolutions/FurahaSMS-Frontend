import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppValidateSubmitButtonsModule } from '../validate-submit-buttons/validate-submit-buttons.module';
import { AppInputModule } from '../input/app-input.module';
import { CrudComponent } from './crud.component';


@NgModule({
  declarations: [
    CrudComponent
  ],
  exports: [
    CrudComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    EditorModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ],
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'},
  ]
})
export class AppCrudModule {
}

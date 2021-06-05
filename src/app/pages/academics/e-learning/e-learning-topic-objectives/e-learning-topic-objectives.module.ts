import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {AppInputModule} from '../../../../components/input/app-input.module';
import { ELearningTopicObjectivesComponent } from './e-learning-topic-objectives.component';



@NgModule({
  declarations: [ELearningTopicObjectivesComponent],
  exports: [ELearningTopicObjectivesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppValidateSubmitButtonsModule,
    AppInputModule,
    ReactiveComponentModule
  ]
})
export class ELearningTopicObjectivesModule { }

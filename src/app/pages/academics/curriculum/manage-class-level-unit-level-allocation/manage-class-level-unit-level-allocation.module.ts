import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { ManageClassLevelUnitLevelAllocationComponent } from './manage-class-level-unit-level-allocation.component';


@NgModule({
  declarations: [ManageClassLevelUnitLevelAllocationComponent],
  imports: [
    CommonModule,
    AppValidateSubmitButtonsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  exports: [ManageClassLevelUnitLevelAllocationComponent]
})
export class ManageClassLevelUnitLevelAllocationModule {
}

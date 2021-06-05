import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectAcademicYearModule } from 'src/app/shared/select-academic-year/select-academic-year.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearPlanEffects } from './store/effects/academic-year-plan.effects';
import * as fromAcademicYearPlan from './store/reducers/academic-year-plan.reducer';
import { EditAcademicYearFinancialPlanComponent } from './edit-academic-year-financial-plan/edit-academic-year-financial-plan.component';
import { ViewAcademicYearFinancialPlanComponent } from './view-academic-year-financial-plan/view-academic-year-financial-plan.component';
import { FinancialPlanComponent } from './financial-plan.component';
import { FinancialPlanRoutingModule } from './financial-plan-routing.module';


@NgModule({
  declarations: [
    FinancialPlanComponent,
    ViewAcademicYearFinancialPlanComponent,
    EditAcademicYearFinancialPlanComponent,
    AcademicYearFinancialPlanComponent],
  imports: [
    CommonModule,
    FinancialPlanRoutingModule,
    SelectAcademicYearModule,
    StoreModule.forFeature(fromAcademicYearPlan.academicYearPlanFeatureKey, fromAcademicYearPlan.reducer),
    EffectsModule.forFeature([AcademicYearPlanEffects]),
    AppLoadingBubbleModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    TabErrorStateModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class FinancialPlanModule { }

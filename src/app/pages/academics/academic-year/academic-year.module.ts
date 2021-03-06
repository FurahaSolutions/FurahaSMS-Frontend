import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { AppCheckboxModule } from '../../../shared/checkbox/checkbox.module';
import { TabErrorStateModule } from '../../../components/tab-error-state/app-tab-error.module';
import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation/academic-year-unit-allocation.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { AcademicYearTimeTablesComponent } from './academic-year-time-tables/academic-year-time-tables.component';
import { CloseAcademicYearSectionModule } from './close-academic-year-section/close-academic-year-section.module';
import { DeleteAcademicYearModule } from './delete-academic-year/delete-academic-year.module';
import { UndeleteAcademicYearModule } from './undelete-academic-year/undelete-academic-year.module';
import { ArchiveAcademicYearModule } from './archive-academic-year/archive-academic-year.module';


@NgModule({
  declarations: [
    AcademicYearUnitAllocationComponent,
    ViewAcademicYearInfoComponent,
    AcademicYearFinancialPlanComponent,
    AcademicYearSubjectUnitsComponent,
    AcademicYearArchivesComponent,
    AcademicYearComponent,
    CreateAcademicYearComponent,
    ViewAcademicYearComponent,
    AcademicYearTimeTablesComponent,

  ],
  imports: [
    CommonModule,
    AcademicYearRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppLinksModule,
    NgSelectModule,
    AppInputModule,
    ErrorModule,
    AppValidateSubmitButtonsModule,
    FormErrorsModule,
    ReactiveComponentModule,
    CloseAcademicYearSectionModule,
    DeleteAcademicYearModule,
    UndeleteAcademicYearModule,
    ArchiveAcademicYearModule,
    AppCheckboxModule,
    FontAwesomeModule,
    TabErrorStateModule
  ]
})
export class AcademicYearModule {
}

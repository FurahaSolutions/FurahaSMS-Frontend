import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimetableEditorDirective } from '../directives/timetable-editor.directive';
import { AppLoadingBubbleModule } from '../../../modules/app-loading-bubble';
import { CreateAcademicYearTimeTableComponent } from './create-academic-year-time-table/create-academic-year-time-table.component';
import { TimeTableAcademicYearDashboardComponent } from './time-table-academic-year-dashboard/time-table-academic-year-dashboard.component';
import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit/time-table-academic-year-edit.component';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';
import { AcademicYearsRoutingModule } from './academic-years-routing.module';
import { AcademicYearsComponent } from './academic-years.component';


@NgModule({
  declarations: [
    AcademicYearsComponent,
    TimeTableAcademicYearViewComponent,
    TimeTableAcademicYearEditComponent,
    TimetableEditorDirective,
    TimeTableAcademicYearDashboardComponent,
    CreateAcademicYearTimeTableComponent
  ],
  imports: [
    CommonModule,
    AcademicYearsRoutingModule,
    AccordionModule.forRoot(),
    ModalModule.forChild(),
    NgSelectModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule,
    FontAwesomeModule
  ]
})
export class AcademicYearsModule {
}

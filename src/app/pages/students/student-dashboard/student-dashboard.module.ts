import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DashboardRoutingModule} from '../../dashboard/dashboard-routing.module';
import {AppPrintModule} from '../../../shared/print/print.module';
import {StudentDashboardComponent} from './student-dashboard.component';

@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DashboardRoutingModule,
    AppPrintModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class StudentDashboardModule {
}

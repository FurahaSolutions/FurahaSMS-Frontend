import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import { AcademicYearSettingComponent } from './academic-year-setting.component';
import { AcademicYearSettingRoutingModule } from './academic-year-setting-routing.module';


@NgModule({
  declarations: [
    AcademicYearSettingComponent
  ],
  imports: [
    CommonModule,
    AcademicYearSettingRoutingModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule,
    FontAwesomeModule
  ]
})
export class AcademicYearSettingModule {
}

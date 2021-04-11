import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcademicYearSettingComponent} from './academic-year-setting.component';
import {AcademicYearSettingRoutingModule} from './academic-year-setting-routing.module';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';


@NgModule({
  declarations: [
    AcademicYearSettingComponent
  ],
  imports: [
    CommonModule,
    AcademicYearSettingRoutingModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule
  ]
})
export class AcademicYearSettingModule {
}

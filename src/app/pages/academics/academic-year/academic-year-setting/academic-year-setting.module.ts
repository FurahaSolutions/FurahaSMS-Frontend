import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcademicYearSettingComponent} from './academic-year-setting.component';
import {AcademicYearSettingRoutingModule} from './academic-year-setting-routing.module';


@NgModule({
  declarations: [
    AcademicYearSettingComponent
  ],
  imports: [
    CommonModule,
    AcademicYearSettingRoutingModule
  ]
})
export class AcademicYearSettingModule {
}

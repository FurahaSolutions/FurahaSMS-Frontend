import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcademicYearSettingComponent} from './academic-year-setting.component';

const routes: Routes = [
  { path: '', component: AcademicYearSettingComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AcademicYearSettingRoutingModule {
}

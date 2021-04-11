import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloseAcademicYearSectionComponent} from './close-academic-year-section.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CloseAcademicYearSectionComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule
  ]
})
export class CloseAcademicYearSectionModule {
}

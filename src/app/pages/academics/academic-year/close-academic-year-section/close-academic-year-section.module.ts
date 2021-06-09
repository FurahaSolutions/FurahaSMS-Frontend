import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CloseAcademicYearSectionComponent } from './close-academic-year-section.component';


@NgModule({
  declarations: [
    CloseAcademicYearSectionComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class CloseAcademicYearSectionModule {
}

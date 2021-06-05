import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule } from '@angular/forms';
import { UndeleteAcademicYearComponent } from './undelete-academic-year.component';


@NgModule({
  declarations: [
    UndeleteAcademicYearComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule
  ]
})
export class UndeleteAcademicYearModule {
}

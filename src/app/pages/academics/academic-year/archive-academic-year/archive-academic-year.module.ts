import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchiveAcademicYearComponent} from './archive-academic-year.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ArchiveAcademicYearComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule
  ]
})
export class ArchiveAcademicYearModule {
}

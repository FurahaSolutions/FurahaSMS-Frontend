import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ArchiveAcademicYearComponent} from './archive-academic-year.component';


@NgModule({
  declarations: [
    ArchiveAcademicYearComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ArchiveAcademicYearModule {
}

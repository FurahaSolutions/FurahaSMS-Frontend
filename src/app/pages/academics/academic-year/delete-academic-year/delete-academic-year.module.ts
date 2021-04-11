import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteAcademicYearComponent} from './delete-academic-year.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DeleteAcademicYearComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    ReactiveComponentModule,
    FormsModule
  ]
})
export class DeleteAcademicYearModule {
}

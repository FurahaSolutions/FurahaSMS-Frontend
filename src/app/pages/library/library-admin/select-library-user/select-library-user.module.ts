import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectLibraryUserComponent} from './select-library-user.component';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {ReactiveComponentModule} from '@ngrx/component';


@NgModule({
  declarations: [
    SelectLibraryUserComponent
  ],
  exports: [
    SelectLibraryUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule,
    ReactiveComponentModule
  ]
})
export class SelectLibraryUserModule {
}

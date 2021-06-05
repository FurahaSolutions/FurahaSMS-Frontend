import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveComponentModule } from '@ngrx/component';
import { SelectLibraryBookRefComponent } from './select-library-book-ref.component';



@NgModule({
  declarations: [
    SelectLibraryBookRefComponent
  ],
  exports: [
    SelectLibraryBookRefComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ReactiveComponentModule
  ]
})
export class SelectLibraryBookRefModule { }

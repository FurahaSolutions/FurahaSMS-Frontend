import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { UserSearchComponent } from './user-search.component';

@NgModule({
  declarations: [
    UserSearchComponent
  ],
  exports: [
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    RouterModule,
    ReactiveComponentModule
  ]
})

export class UserSearchModule {
}

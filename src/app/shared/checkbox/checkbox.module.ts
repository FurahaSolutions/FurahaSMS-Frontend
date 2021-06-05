import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckboxComponent } from './checkbox.component';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  exports: [CheckboxComponent]
})
export class AppCheckboxModule { }

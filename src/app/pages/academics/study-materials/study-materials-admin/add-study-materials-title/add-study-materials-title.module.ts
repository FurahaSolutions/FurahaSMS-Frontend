import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddStudyMaterialsTitleComponent } from './add-study-materials-title.component';



@NgModule({
  declarations: [
    AddStudyMaterialsTitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  exports: [
    AddStudyMaterialsTitleComponent
  ]
})
export class AddStudyMaterialsTitleModule { }

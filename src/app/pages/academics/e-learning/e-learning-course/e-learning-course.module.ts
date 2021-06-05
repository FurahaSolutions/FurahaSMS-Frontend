import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { ELearningCourseComponent } from './e-learning-course.component';



@NgModule({
  declarations: [ELearningCourseComponent],
  exports: [ELearningCourseComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule
  ]
})
export class ELearningCourseModule { }

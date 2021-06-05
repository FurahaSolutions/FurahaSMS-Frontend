import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [DurationPipe],
  exports: [
    DurationPipe
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class DurationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { AddCommaDirective } from './add-comma.directive';



@NgModule({
  declarations: [AddCommaDirective],
  exports: [AddCommaDirective],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class AddCommaModule { }

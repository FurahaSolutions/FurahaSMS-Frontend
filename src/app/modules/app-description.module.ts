import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { DescriptionComponent } from '../components/description/description.component';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  exports: [
    DescriptionComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppDescriptionModule { }

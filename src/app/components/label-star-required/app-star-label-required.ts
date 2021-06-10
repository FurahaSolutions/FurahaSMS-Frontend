import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LabelStarRequiredComponent, StarRequiredComponent } from './label-star-required.component';


@NgModule({
  declarations: [
    LabelStarRequiredComponent,
    StarRequiredComponent
  ],
  exports: [
    LabelStarRequiredComponent,
    StarRequiredComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class AppStarLabelRequiredModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChipsComponent } from './chips.component';


@NgModule({
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ],

  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AppChipsModule {
}

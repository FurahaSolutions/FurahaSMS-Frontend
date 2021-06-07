import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabErrorStateComponent } from './tab-error-state.component';


@NgModule({
  declarations: [
    TabErrorStateComponent
  ],
  exports: [
    TabErrorStateComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class TabErrorStateModule { }

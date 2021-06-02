import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabErrorStateComponent } from '../components/tab-error-state/tab-error-state.component';
import { ReactiveComponentModule } from '@ngrx/component';


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
  ]
})
export class TabErrorStateModule { }

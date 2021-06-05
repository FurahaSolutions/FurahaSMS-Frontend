import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { TabErrorStateComponent } from '../components/tab-error-state/tab-error-state.component';


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

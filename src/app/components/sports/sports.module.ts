import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports.component';


@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class SportsModule {
}

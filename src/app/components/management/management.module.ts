import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { SchoolManagementRoutingModule } from './management-routing.module';
import { SchoolManagementComponent } from './management.component';


@NgModule({
  declarations: [SchoolManagementComponent],
  imports: [
    CommonModule,
    SchoolManagementRoutingModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class SchoolManagementModule {
}

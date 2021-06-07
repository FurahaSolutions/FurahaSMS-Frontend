import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';
import {
  ManageClassLevelUnitLevelAllocationModule
} from '../manage-class-level-unit-level-allocation/manage-class-level-unit-level-allocation.module';
import { ClassLevelUnitLevelAllocationRoutingModule } from './class-level-unit-level-allocation-routing.module';
import { ClassLevelUnitLevelAllocationComponent } from './class-level-unit-level-allocation.component';


@NgModule({
  declarations: [ClassLevelUnitLevelAllocationComponent],
  imports: [
    CommonModule,
    ClassLevelUnitLevelAllocationRoutingModule,
    AppLoadingBubbleModule,
    ManageClassLevelUnitLevelAllocationModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class ClassLevelUnitLevelAllocationModule {
}

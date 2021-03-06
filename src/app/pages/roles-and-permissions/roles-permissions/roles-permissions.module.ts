import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterModule } from '@angular/router';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RolesPermissionEditComponent } from './roles-permission-edit/roles-permission-edit.component';
import { RolesPermissionsComponent } from './roles-permissions.component';
import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';


@NgModule({
  declarations: [RolesPermissionsComponent, RolesPermissionEditComponent],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    RouterModule,
    AppCheckboxModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class RolesPermissionsModule { }

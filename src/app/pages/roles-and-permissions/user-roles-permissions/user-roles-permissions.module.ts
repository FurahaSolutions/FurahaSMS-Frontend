import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRolesPermissionsRoutingModule } from './user-roles-permissions-routing.module';
import { UserRolesPermissionsComponent } from './user-roles-permissions.component';


@NgModule({
  declarations: [UserRolesPermissionsComponent],
  imports: [
    CommonModule,
    UserRolesPermissionsRoutingModule,
    ErrorModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class UserRolesPermissionsModule { }

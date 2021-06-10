import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';


@NgModule({
  declarations: [RolesAndPermissionsComponent],
  imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class RolesAndPermissionsModule { }

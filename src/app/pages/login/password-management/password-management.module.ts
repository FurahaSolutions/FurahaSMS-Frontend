import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { UserPasswordResetModule } from '../user-password-reset/user-password-reset.module';
import { UserPasswordChangeModule } from '../user-password-change/user-password-change.module';
import { LoadMyProfileModule } from '../../my-profile/load-my-profile.module';
import { PasswordManagementComponent } from './password-management.component';
import { PasswordManagementRoutingModule } from './password-management-routing.module';


@NgModule({
  declarations: [
    PasswordManagementComponent
  ],
  imports: [
    CommonModule,
    PasswordManagementRoutingModule,
    UserPasswordChangeModule,
    UserPasswordResetModule,
    RouterModule,
    LoadMyProfileModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class PasswordManagementModule {
}

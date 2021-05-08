import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAdminUsersRoutingModule } from './library-admin-users-routing.module';
import { LibraryAdminUsersComponent } from './library-admin-users.component';
import { AppLinksModule } from '../../../../shared/links/links.module';
import { AddLibraryUserComponent } from './add-library-user/add-library-user.component';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchModule } from '../../../../components/user-search/user-search.module';
import { ViewLibraryUserComponent } from './view-library-user/view-library-user.component';
import { LibraryUserStatusComponent } from './library-user-status/library-user-status.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppLoadingBubbleModule } from '../../../../modules/app-loading-bubble';


@NgModule({
  declarations: [
    LibraryAdminUsersComponent,
    AddLibraryUserComponent,
    ViewLibraryUserComponent,
    LibraryUserStatusComponent
  ],
  imports: [
    CommonModule,
    LibraryAdminUsersRoutingModule,
    AppLinksModule,
    AppValidateSubmitButtonsModule,
    ReactiveFormsModule,
    UserSearchModule,
    FormsModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule
  ]
})
export class LibraryAdminUsersModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';
import {AppLinksModule} from '../../../../shared/links/links.module';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {UserSearchModule} from '../../../../components/user-search/user-search.module';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {LibraryAdminUsersRoutingModule} from './library-admin-users-routing.module';
import {LibraryAdminUsersComponent} from './library-admin-users.component';
import {AddLibraryUserComponent} from './add-library-user/add-library-user.component';
import {ViewLibraryUserComponent} from './view-library-user/view-library-user.component';
import {LibraryUserStatusComponent} from './library-user-status/library-user-status.component';


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

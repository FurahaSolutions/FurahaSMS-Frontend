import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAdminUsersRoutingModule } from './library-admin-users-routing.module';
import { LibraryAdminUsersComponent } from './library-admin-users.component';
import { AppLinksModule } from '../../../../shared/links/links.module';
import { AddLibraryUserComponent } from './add-library-user/add-library-user.component';
import { AppValidateSubmitButtonsModule } from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSearchModule } from '../../../../components/user-search/user-search.module';


@NgModule({
  declarations: [
    LibraryAdminUsersComponent,
    AddLibraryUserComponent
  ],
  imports: [
    CommonModule,
    LibraryAdminUsersRoutingModule,
    AppLinksModule,
    AppValidateSubmitButtonsModule,
    ReactiveFormsModule,
    UserSearchModule
  ]
})
export class LibraryAdminUsersModule { }

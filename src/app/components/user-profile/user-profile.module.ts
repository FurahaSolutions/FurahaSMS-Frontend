import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PasswordChangeFormModule } from 'src/app/pages/login/password-change-form/password-change-form.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLoadingBubbleModule } from '../../modules/app-loading-bubble';
import { UserSelectItemComponent } from './user-select-item/user-select-item.component';
import { NameItemComponent } from './name-item/name-item.component';
import { UserProfileComponent } from './user-profile.component';
import { LibraryProfileComponent } from './library-profile/library-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent, NameItemComponent, UserSelectItemComponent, LibraryProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ModalModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    PasswordChangeFormModule,
    ReactiveComponentModule,
    FontAwesomeModule,
    AppLoadingBubbleModule
  ],
  exports: [
    UserProfileComponent,
    UserSelectItemComponent,
    NameItemComponent
  ]
})
export class AppUserProfileModule {
}

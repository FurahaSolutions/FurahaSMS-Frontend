import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileInfoComponent } from './my-profile-info/my-profile-info.component';
import { LoadMyProfileModule } from './load-my-profile.module';


@NgModule({
  declarations: [MyProfileComponent, MyProfileInfoComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
    LoadMyProfileModule,
    ReactiveComponentModule
  ]
})
export class MyProfileModule { }

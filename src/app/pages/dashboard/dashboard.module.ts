import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import {LoadMyProfileModule} from '../my-profile/load-my-profile.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    LoadMyProfileModule,
    ReactiveComponentModule
  ]
})
export class DashboardModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FinancialCostsMaintenanceComponent } from './financial-costs-maintenance/financial-costs-maintenance.component';
import { AccountsAdminComponent } from './accounts-admin.component';
import { AccountsAdminRoutingModule } from './accounts-admin-routing.module';


@NgModule({
  declarations: [AccountsAdminComponent, FinancialCostsMaintenanceComponent],
  imports: [
    CommonModule,
    AccountsAdminRoutingModule,
    AppLinksModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class AccountsAdminModule { }

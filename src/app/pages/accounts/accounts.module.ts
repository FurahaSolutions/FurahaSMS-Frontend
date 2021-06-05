import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountEffects } from './store/effects/account.effects';
import { PaymentTypeEffects } from './store/effects/payment-type.effects';
import * as fromAccounts from './store/reducers';
import { StudentFeeStatementEffects } from './store/effects/student-fee-statement.effects';


@NgModule({
  declarations: [ AccountsComponent ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    StoreModule.forFeature(fromAccounts.accountFeatureKey, fromAccounts.reducers),
    EffectsModule.forFeature([AccountEffects, PaymentTypeEffects, StudentFeeStatementEffects]),
    ReactiveComponentModule

  ]
})
export class AccountsModule { }

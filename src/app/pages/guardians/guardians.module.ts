import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuardiansRoutingModule } from './guardians-routing.module';
import { ViewGuardianComponent } from './view-guardian/view-guardian.component';
import { ViewGuardianInfoComponent } from './view-guardian-info/view-guardian-info.component';
import * as fromGuardianProfile from './store/reducers/guardian-profile.reducer';
import { GuardianProfileEffects } from './store/effects/guardian-profile.effects';
import { ViewGuardianStudentsComponent } from './view-guardian-students/view-guardian-students.component';


@NgModule({
  declarations: [ViewGuardianComponent, ViewGuardianInfoComponent, ViewGuardianStudentsComponent],
  imports: [
    CommonModule,
    GuardiansRoutingModule,
    StoreModule.forFeature(fromGuardianProfile.guardianProfileFeatureKey, fromGuardianProfile.reducer),
    EffectsModule.forFeature([GuardianProfileEffects]),
    AppUserProfileModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class GuardiansModule { }

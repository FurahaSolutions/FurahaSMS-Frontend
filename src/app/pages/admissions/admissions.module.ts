import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { AdmissionsEffects } from './store/effects/admissions.effects';
import * as fromAdmissions from './store/reducers';
import { AdmissionsComponent } from './admissions.component';
import { AdmissionsRoutingModule } from './admissions-routing.module';


@NgModule({
  declarations: [
    AdmissionsComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers),
    EffectsModule.forFeature([AdmissionsEffects]),
    ReactiveComponentModule,
  ]
})
export class AdmissionsModule { }

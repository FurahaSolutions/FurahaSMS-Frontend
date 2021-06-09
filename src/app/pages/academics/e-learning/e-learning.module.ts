import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ELearningRoutingModule } from './e-learning-routing.module';
import { ELearningComponent } from './e-learning.component';


@NgModule({
  declarations: [ELearningComponent],
  imports: [
    CommonModule,
    ELearningRoutingModule,
    AppLinksModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class ELearningModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudyMaterialsRoutingModule } from './study-materials-routing.module';
import { StudyMaterialsComponent } from './study-materials.component';


@NgModule({
  declarations: [StudyMaterialsComponent],
  imports: [
    CommonModule,
    StudyMaterialsRoutingModule,
    AppLinksModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class StudyMaterialsModule { }

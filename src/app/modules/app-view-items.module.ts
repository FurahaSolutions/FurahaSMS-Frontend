import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { ViewItemsComponent } from '../components/view-items/view-items.component';
import { ErrorModule } from '../components/error/error.module';
import { AppChipsModule } from '../components/chips/app-chip.module';
import { ViewComponent } from '../components/view/view.component';
import { AppLoadingBubbleModule } from './app-loading-bubble';
import { AppDescriptionModule } from './app-description.module';


@NgModule({
  declarations: [
    ViewItemsComponent,
    ViewComponent
  ],
  exports: [
    ViewItemsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorModule,
    AppChipsModule,
    AppLoadingBubbleModule,
    AppDescriptionModule,
    ReactiveComponentModule

  ]
})
export class AppViewItemsModule { }

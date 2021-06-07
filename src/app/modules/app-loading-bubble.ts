import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBubbleComponent } from '../components/loading-bubble/loading-bubble.component';


@NgModule({
  declarations: [
    LoadingBubbleComponent
  ],
  exports: [
    LoadingBubbleComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class AppLoadingBubbleModule { }

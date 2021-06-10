import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLayoutModule } from '../modules/app-layout.module';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    AppLayoutModule,
    ReactiveComponentModule,
    FontAwesomeModule

  ],
  exports: [
    ToastComponent],

})
export class ComponentsModule {
}

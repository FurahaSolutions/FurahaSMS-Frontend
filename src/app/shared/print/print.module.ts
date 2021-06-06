import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrintComponent } from './components/print/print.component';


@NgModule({
  declarations: [PrintComponent],
  exports: [PrintComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class AppPrintModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { PrintComponent } from './components/print/print.component';



@NgModule({
  declarations: [PrintComponent],
  exports: [PrintComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class AppPrintModule { }

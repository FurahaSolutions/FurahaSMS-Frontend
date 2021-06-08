import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NetworkLoadingComponent } from './components/network-loading/network-loading.component';



@NgModule({
  declarations: [NetworkLoadingComponent],
  exports: [NetworkLoadingComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class NetworkLoadingModule { }

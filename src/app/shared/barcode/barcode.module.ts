import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { BarcodeComponent } from './barcode.component';



@NgModule({
  declarations: [BarcodeComponent],
  exports: [BarcodeComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule
  ]
})
export class AppBarcodeModule { }

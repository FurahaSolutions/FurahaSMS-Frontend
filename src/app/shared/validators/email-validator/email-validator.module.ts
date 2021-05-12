import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email.validator';



@NgModule({
  declarations: [EmailValidatorDirective],
  imports: [
    CommonModule
  ]
})
export class EmailValidatorModule { }

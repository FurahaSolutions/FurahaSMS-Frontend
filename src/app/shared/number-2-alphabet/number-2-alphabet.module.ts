import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { Number2AlphabetPipe } from './number-2-alphabet.pipe';


@NgModule({
  declarations: [Number2AlphabetPipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ],
  exports: [Number2AlphabetPipe]
})
export class Number2AlphabetModule { }

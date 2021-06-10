import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FileExtensionPipe } from './file-extension.pipe';


@NgModule({
  declarations: [FileExtensionPipe],
  exports: [FileExtensionPipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class FileExtensionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FileExtentionPipe } from './file-extention.pipe';


@NgModule({
  declarations: [FileExtentionPipe],
  exports: [FileExtentionPipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class FileExtensionModule { }

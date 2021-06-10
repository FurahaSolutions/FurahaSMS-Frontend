import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FilesizePipe } from './filesize.pipe';



@NgModule({
  declarations: [FilesizePipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ],
  exports: [FilesizePipe]
})
export class AppFilesizeModule { }

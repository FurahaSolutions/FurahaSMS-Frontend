import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddStudyMaterialsTitleModule } from '../../study-materials-admin/add-study-materials-title/add-study-materials-title.module';
import { ViewStudyMaterialComponent } from './view-study-material.component';



@NgModule({
  declarations: [ViewStudyMaterialComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    AddStudyMaterialsTitleModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  exports: [ViewStudyMaterialComponent]
})
export class ViewStudyMaterialModule { }

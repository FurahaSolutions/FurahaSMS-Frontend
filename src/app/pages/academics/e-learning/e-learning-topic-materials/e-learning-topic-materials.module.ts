import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { FileExtensionModule } from 'src/app/shared/file-extention/file-extension.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ELearningTopicMaterialsComponent } from './e-learning-topic-materials.component';



@NgModule({
  declarations: [ELearningTopicMaterialsComponent],
  exports: [ELearningTopicMaterialsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppFilesizeModule,
    FileExtensionModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class ELearningTopicMaterialsModule { }

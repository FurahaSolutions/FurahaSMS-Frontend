import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { LibraryAdminPublisherItemComponent } from './library-admin-publisher-item/library-admin-publisher-item.component';
import { LibraryAdminPublisherRoutingModule } from './library-admin-publisher-routing.module';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import { ViewPublisherComponent } from './view-publisher/view-publisher.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { LibraryAdminPublishersComponent } from './library-admin-publishers.component';

@NgModule({
  declarations: [

    LibraryAdminPublishersComponent,
    CreatePublisherComponent,
    ViewPublisherComponent,
    EditPublisherComponent,
    LibraryAdminPublisherItemComponent,

  ],
  imports: [
    CommonModule,
    LibraryAdminPublisherRoutingModule,
    AppLoadingBubbleModule,
    AppViewItemsModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    EditorModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ]
})
export class LibraryAdminPublisherModule { }

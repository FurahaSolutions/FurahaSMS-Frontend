import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AppSelectLibraryClassModule} from '../../modules/select-library-class.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {LibraryAdminTagsRoutingModule} from './library-admin-tags-routing.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';
import {CreateTagComponent} from './create-tag/create-tag.component';
import {EditTagComponent} from './edit-tag/edit-tag.component';
import {ViewTagComponent} from './view-tag/view-tag.component';
import {LibraryAdminTagsComponent} from './library-admin-tags.component';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {AppViewItemsModule} from '../../../../modules/app-view-items.module';

@NgModule({
  declarations: [
    LibraryAdminTagsComponent,
    CreateTagComponent,
    EditTagComponent,
    ViewTagComponent,
  ],
  imports: [
    CommonModule,
    LibraryAdminTagsRoutingModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule,
    FormsModule,
    ReactiveFormsModule,
    AppLinksModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule,
    AppLoadingBubbleModule,
    AppViewItemsModule
  ]
})
export class LibraryAdminTagsModule {
}

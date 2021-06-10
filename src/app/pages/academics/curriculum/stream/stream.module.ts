import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppViewItemsModule} from 'src/app/modules/app-view-items.module';
import {ErrorModule} from 'src/app/components/error/error.module';
import {AppCrudModule} from 'src/app/components/crud/app-crud.module';
import {ReactiveComponentModule} from '@ngrx/component';
import {StreamRoutingModule} from './stream-routing.module';
import {StreamComponent} from './stream.component';
import {CreateStreamComponent} from './create-stream/create-stream.component';
import {ViewStreamComponent} from './view-stream/view-stream.component';
import {EditStreamComponent} from './edit-stream/edit-stream.component';


@NgModule({
  declarations: [StreamComponent, CreateStreamComponent, ViewStreamComponent, EditStreamComponent],
  imports: [
    CommonModule,
    StreamRoutingModule,
    AppViewItemsModule,
    ErrorModule,
    AppCrudModule,
    ReactiveComponentModule
  ]
})
export class StreamModule {
}

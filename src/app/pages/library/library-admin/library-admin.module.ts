import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { LibraryAdminComponent } from './library-admin.component';
import { LibraryAdminRoutingModule } from './library-admin-routing.module';

@NgModule({
  declarations: [
    LibraryAdminComponent
  ],
  imports: [
    CommonModule,
    LibraryAdminRoutingModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class LibraryAdminModule {
}

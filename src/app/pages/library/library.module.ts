import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppCheckboxModule } from '../../shared/checkbox/checkbox.module';
import * as fromLibrary from './store/reducers';
import * as fromLibraryEffects from './store/effects';
import { ViewLibraryBookComponent } from './components/view-library-book/view-library-book.component';
import { LibraryBookEffects } from './store/effects/library-book.effects';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';



@NgModule({
  declarations: [
    LibraryComponent,
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
    ViewLibraryBookComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    AppLinksModule,
    AppLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    StoreModule.forFeature(fromLibrary.libraryFeatureKey, fromLibrary.reducers),
    EffectsModule.forFeature([
      fromLibraryEffects.LibraryBookAuthorEffects,
      fromLibraryEffects.LibraryBookPublisherEffects,
      fromLibraryEffects.LibraryBookClassificationEffects,
      LibraryBookEffects
    ]),
    TypeaheadModule.forRoot(),
    ReactiveComponentModule,
    AppCheckboxModule,
  ]
})
export class LibraryModule { }

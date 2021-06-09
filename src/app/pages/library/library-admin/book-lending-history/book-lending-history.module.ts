import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveComponentModule} from '@ngrx/component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {BookLendingHistoryComponent} from './book-lending-history.component';


@NgModule({
  declarations: [
    BookLendingHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookLendingHistoryComponent
      }
    ]),
    ReactiveComponentModule,
    PaginationModule.forRoot(),
    FormsModule,
    AppLoadingBubbleModule
  ]
})
export class BookLendingHistoryModule {
}

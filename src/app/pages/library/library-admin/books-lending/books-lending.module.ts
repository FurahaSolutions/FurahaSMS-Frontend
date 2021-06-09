import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLinksModule } from '../../../../shared/links/links.module';
import { BooksLendingComponent } from './books-lending.component';


@NgModule({
  declarations: [
    BooksLendingComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BooksLendingComponent
      }, {
        path: 'issue-book',
        data: {
          breadcrumb: 'Book Issue'
        },
        loadChildren: () => import('../book-issue/book-issue.module')
          .then(m => m.BookIssueModule)
      },
      {
        path: 'return-book',
        data: {
          breadcrumb: 'Book Issue'
        },
        loadChildren: () => import('../book-return/book-return.module')
          .then(m => m.BookReturnModule)
      }, {
        path: 'history',
        data: {
          breadcrumb: 'Lending History'
        },
        loadChildren: () => import('../book-lending-history/book-lending-history.module')
          .then(m => m.BookLendingHistoryModule)
      },
    ]),
    CommonModule,
    AppLinksModule
  ]
})
export class BooksLendingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAdminComponent } from './library-admin.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LibraryAdminComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'users',
    loadChildren: () => import ('./library-admin-users/library-admin-users.module')
      .then(m => m.LibraryAdminUsersModule),
    data: {
      breadcrumb: 'Users'
    }
  },
  {
    path: 'books',
    data: {
      breadcrumb: 'Books'
    },
    loadChildren: () => import('./library-admin-books/library-admin-books.module')
      .then(m => m.LibraryAdminBooksModule)
  },
  {
    path: 'authors',
    data: {
      breadcrumb: 'Authors'
    },
    loadChildren: () => import('./library-admin-authors/library-admin-authors.module')
      .then(m => m.LibraryAdminAuthorsModule)
  },
  {
    path: 'publishers',
    data: {
      breadcrumb: 'Publishers'
    },
    loadChildren: () => import('./library-admin-publishers/library-admin-publisher.module')
      .then(m => m.LibraryAdminPublisherModule)
  },
  {
    path: 'tags',
    data: {
      breadcrumb: 'Tags'
    },
    loadChildren: () => import('./library-admin-tags/library-admin-tags.module')
      .then(m => m.LibraryAdminTagsModule)
  },
  {
    path: 'issue-book',
    data: {
      breadcrumb: 'Book Issue'
    },
    loadChildren: () => import('./book-issue/book-issue.module')
      .then(m => m.BookIssueModule)
  },
  {
    path: 'return-book',
    data: {
      breadcrumb: 'Book Issue'
    },
    loadChildren: () => import('./book-return/book-return.module')
      .then(m => m.BookReturnModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminRoutingModule {
}

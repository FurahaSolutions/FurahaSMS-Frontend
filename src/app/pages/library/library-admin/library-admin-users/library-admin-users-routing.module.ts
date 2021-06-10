import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LibraryAdminUsersComponent} from './library-admin-users.component';
import {AddLibraryUserComponent} from './add-library-user/add-library-user.component';
import {ViewLibraryUserComponent} from './view-library-user/view-library-user.component';
import {LibraryUserStatusComponent} from './library-user-status/library-user-status.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LibraryAdminUsersComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'add',
    component: AddLibraryUserComponent
  },
  {
    path: 'view',
    component: ViewLibraryUserComponent
  },
  {
    path: ':id',
    component: LibraryUserStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminUsersRoutingModule {
}

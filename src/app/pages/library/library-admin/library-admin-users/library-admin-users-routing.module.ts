import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAdminUsersComponent } from './library-admin-users.component';
import { AddLibraryUserComponent } from './add-library-user/add-library-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminUsersRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanDeactivateGuard} from 'src/app/guards/can-deactivate.guard';
import {LibraryAdminTagsComponent} from './library-admin-tags.component';
import {CreateTagComponent} from './create-tag/create-tag.component';
import {ViewTagComponent} from './view-tag/view-tag.component';
import {EditTagComponent} from './edit-tag/edit-tag.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LibraryAdminTagsComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'create',
    component: CreateTagComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      breadcrumb: 'Create Tags'
    },
  },
  {
    path: ':id/view',
    component: ViewTagComponent,
    data: {
      breadcrumb: 'View Tag'
    },
  },
  {
    path: ':id/edit',
    component: EditTagComponent,
    data: {
      breadcrumb: 'Edit Tag'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminTagsRoutingModule {
}

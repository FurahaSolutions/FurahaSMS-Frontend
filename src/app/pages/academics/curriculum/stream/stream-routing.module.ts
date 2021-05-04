import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StreamComponent} from './stream.component';
import {CreateStreamComponent} from './create-stream/create-stream.component';
import {ViewStreamComponent} from './view-stream/view-stream.component';
import {EditStreamComponent} from './edit-stream/edit-stream.component';


const routes: Routes = [
  {
    path: '',
    component: StreamComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'create',
    component: CreateStreamComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: 'view',
        component: ViewStreamComponent
      },
      {
        path: 'edit',
        component: EditStreamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamRoutingModule {
}

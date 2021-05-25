import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookReturnComponent } from "./book-return.component";

const routes: Routes = [
  {
    path: '',
    component: BookReturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookReturnRoutingModule { }

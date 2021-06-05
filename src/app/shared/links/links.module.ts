import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { LinksComponent } from './links.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [LinksComponent, LinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule
  ],
  exports: [LinksComponent]
})
export class AppLinksModule { }

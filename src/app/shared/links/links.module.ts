import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinksComponent } from './links.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [LinksComponent, LinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ],
  exports: [LinksComponent]
})
export class AppLinksModule { }

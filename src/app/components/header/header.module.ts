import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { HeaderCollapseComponent } from './header-collapse/header-collapse.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    MenuSearchComponent,
    UserButtonComponent,
    LogoutButtonComponent,
    HeaderCollapseComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    MenuSearchComponent,
    UserButtonComponent,
    LogoutButtonComponent,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CollapseModule.forRoot(),
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class HeaderModule {
}

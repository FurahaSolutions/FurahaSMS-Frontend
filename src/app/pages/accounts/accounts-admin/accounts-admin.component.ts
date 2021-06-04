import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.css']
})
export class AccountsAdminComponent {
  links$ = of([
    {name: 'Financial Costs', icon: 'icon-dollar', link: 'accounts/admin/financial-costs'},
  ]);

  constructor() {
  }

}

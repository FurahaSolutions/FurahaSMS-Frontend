import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { LinkInterface } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.css']
})
export class AccountsAdminComponent {
  links$: Observable<LinkInterface[]> = of([
    {name: 'Financial Costs', icon: faDollarSign, link: 'accounts/admin/financial-costs'},
  ]);

  constructor() {
  }

}

import { Component, OnInit} from '@angular/core';
import { takeUntil} from 'rxjs/operators';
import { RolesAndPermissionsService } from '../services/roles-and-permissions.service';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-roles-permissions',
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.css']
})
export class RolesPermissionsComponent extends subscribedContainerMixin() implements OnInit {

  role = 0;
  roles$= this.rolesPermissionsService.roles$
    .pipe(takeUntil(this.destroyed$));
  roles: any[] = [];
  isLoading = true;
  filter: string | RegExp = '';
  constructor(
    private rolesPermissionsService: RolesAndPermissionsService
  ) {
    super();
  }

  ngOnInit() {
    this.roles$.subscribe(res => {
      this.roles = res;
      this.isLoading = false;
    });
  }
  getRoleWithId(idNumber: number) {
    return this.roles.find(({ id }) => id === idNumber);
  }

  getFilteredPermissionsWithRoleId(idNumber: number) {
    return this.getRoleWithId(idNumber).permissions.filter(({name}: any) => (new RegExp(this.filter).test(name)));
  }

}
